"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const basket_entity_1 = require("../../entities/basket.entity");
const basket_items_entity_1 = require("../../entities/basket_items.entity");
const user_entity_1 = require("../../entities/user.entity");
const order_entity_1 = require("../../entities/order.entity");
const orderItems_entity_1 = require("../../entities/orderItems.entity");
const discount_code_entity_1 = require("../../entities/discount-code.entity");
const crypto_1 = require("crypto");
let BasketService = class BasketService extends crud_1.CRUDService {
    constructor(repo, repoBasketItems, repoOrderItems, repoUser, repoOrder, repoDiscountCode) {
        super(repo);
        this.repo = repo;
        this.repoBasketItems = repoBasketItems;
        this.repoOrderItems = repoOrderItems;
        this.repoUser = repoUser;
        this.repoOrder = repoOrder;
        this.repoDiscountCode = repoDiscountCode;
    }
    async getBasketItemsForBasket(basketUuid) {
        const basket = await this.repo.findOne({
            where: { uuid: basketUuid },
            relations: ['basketItems'],
        });
        if (!basket) {
            return [];
        }
        return basket.basketItems || [];
    }
    async findOne(options) {
        return this.repo.findOne(options);
    }
    async getAllBasketItems(userUuid) {
        const user = await this.repoUser.findOne({
            where: { uuid: userUuid },
            relations: ['basket'],
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        let basket = user.basket;
        if (!basket) {
            basket = this.repo.create();
            user.basket = basket;
            basket.user = user;
            await this.repo.save(basket);
            await this.repoUser.save(user);
        }
        const basketItems = await this.getBasketItemsForBasket(basket.uuid);
        return { basketItems };
    }
    async addBasketItem(userUuid, dto) {
        const user = await this.repoUser.findOne({
            where: { uuid: userUuid },
            relations: ['basket'],
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        const basket = user.basket;
        if (!basket) {
            throw new common_1.BadRequestException('Basket not found');
        }
        const basketItem = this.repoBasketItems.create({
            courseDetails: {
                title: dto.title || 'Untitled Course',
                institute: dto.institute || 'Unknown Institute',
                tutor: dto.tutor || 'Unknown Tutor',
                duration: dto.duration || '00:00:00',
                sessions: dto.sessions || 0,
                students: dto.students || 0,
                discount: dto.discount || 0,
                unit_price: dto.unit_price || 0,
                rate: dto.rate || 0,
            },
            basket: { uuid: basket.uuid },
        });
        await this.repoBasketItems.save(basketItem);
        return basketItem;
    }
    async deleteBasketItem(basketItemUuid) {
        return await this.repoBasketItems.delete(basketItemUuid);
    }
    async checkoutBasket(userUuid, createOrderDto) {
        const user = await this.repoUser.findOne({
            where: { uuid: userUuid },
            relations: ['basket'],
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        const basket = user.basket;
        if (!basket) {
            throw new common_1.BadRequestException('Basket not found');
        }
        const basketItems = await this.getBasketItemsForBasket(basket.uuid);
        if (basketItems.length == 0) {
            throw new common_1.BadRequestException('Basket is empty');
        }
        let total_price = 0;
        for (const basketItem of basketItems) {
            const { unit_price, discount } = basketItem.courseDetails;
            const discountedPrice = unit_price - (discount * unit_price) / 100;
            total_price += discountedPrice;
        }
        let final_price = total_price;
        let profit = 0;
        let discountValue = null;
        let discountCodeUuid = null;
        if (createOrderDto.discount_code) {
            const discountCode = await this.repoDiscountCode.findOne({
                where: { code: createOrderDto.discount_code },
            });
            if (discountCode) {
                discountValue = discountCode.discountValue;
                discountCodeUuid = discountCode.uuid;
                final_price = total_price - (discountValue * total_price) / 100;
                profit = total_price - final_price;
            }
        }
        const tracking_code = (0, crypto_1.randomInt)(1000000, 9999999);
        const order = this.repoOrder.create({
            description: createOrderDto.description,
            status: order_entity_1.Status.Pending,
            type: order_entity_1.Type.Purchase,
            discount_code: createOrderDto.discount_code,
            discountValue,
            discount_code_uuid: discountCodeUuid,
            discount_price: profit,
            total_price: total_price,
            final_price: final_price,
            tracking_code: tracking_code,
            acceptedTermsAndConditions: createOrderDto.acceptedTermsAndConditions,
            orderItems: basketItems,
            user: { uuid: userUuid },
        });
        await this.repoOrderItems.save(basketItems);
        await this.repoOrder.save(order);
        const basketItemsUuids = basketItems === null || basketItems === void 0 ? void 0 : basketItems.map((b) => b.uuid);
        if (basketItemsUuids) {
            await this.repoBasketItems.delete(basketItemsUuids);
        }
        await this.repo.save(basket);
        return order;
    }
    async checkDiscountCode(code) {
        const discountCode = await this.repoDiscountCode.findOne({
            where: { code },
        });
        if (discountCode !== null) {
            return discountCode.discountValue;
        }
        else {
            return null;
        }
    }
    async getUserOrders(userUuid, page, search, sort, filter) {
        const user = await this.repoUser.findOne({
            where: { uuid: userUuid },
            relations: ['order', 'order.orderItems'],
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        const per_page = 20;
        let orders = user.order || [];
        if (search) {
            orders = orders.filter((order) => order.description &&
                order.description.toLowerCase().includes(search.toLowerCase()));
        }
        if (sort) {
            switch (sort) {
                case 'oldest':
                    orders = orders.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
                    break;
                case 'most_expensive':
                    orders = orders.sort((a, b) => b.final_price - a.final_price);
                    break;
                case 'least_expensive':
                    orders = orders.sort((a, b) => a.final_price - b.final_price);
                    break;
                default:
                    throw new common_1.BadRequestException('Invalid sort option');
            }
        }
        else {
            orders = orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        }
        if (filter) {
            Object.keys(filter).forEach((k) => {
                orders = orders.filter((order) => {
                    if (typeof filter[k] == 'string') {
                        filter[k] = [filter[k]];
                    }
                    const key = k;
                    if (Array.isArray(filter[k]) && order[key]) {
                        return filter[k].includes(order[key]);
                    }
                    return false;
                });
            });
        }
        const total = orders.length;
        orders = orders.slice((page - 1) * per_page, page * per_page);
        return { data: orders, total };
    }
    async getAdminOrders(page, search, sort, filter) {
        const per_page = 20;
        let orders = await this.repoOrder.find({
            relations: ['orderItems'],
        });
        if (search) {
            orders = orders.filter((order) => order.description &&
                order.description.toLowerCase().includes(search.toLowerCase()));
        }
        if (sort) {
            switch (sort) {
                case 'oldest':
                    orders = orders.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
                    break;
                case 'most_expensive':
                    orders = orders.sort((a, b) => b.final_price - a.final_price);
                    break;
                case 'least_expensive':
                    orders = orders.sort((a, b) => a.final_price - b.final_price);
                    break;
                default:
                    throw new common_1.BadRequestException('Invalid sort option');
            }
        }
        else {
            orders = orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        }
        if (filter) {
            Object.keys(filter).forEach((k) => {
                orders = orders.filter((order) => {
                    if (typeof filter[k] == 'string') {
                        filter[k] = [filter[k]];
                    }
                    const key = k;
                    if (Array.isArray(filter[k]) && order[key]) {
                        return filter[k].includes(order[key]);
                    }
                    return false;
                });
            });
        }
        const total = orders.length;
        orders = orders.slice((page - 1) * per_page, page * per_page);
        return { data: orders, total };
    }
};
BasketService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_2.InjectRepository)(basket_entity_1.Basket)),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(basket_items_entity_1.BasketItems)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(orderItems_entity_1.OrderItems)),
    tslib_1.__param(3, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    tslib_1.__param(4, (0, typeorm_2.InjectRepository)(order_entity_1.Order)),
    tslib_1.__param(5, (0, typeorm_2.InjectRepository)(discount_code_entity_1.DiscountCode)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], BasketService);
exports.BasketService = BasketService;
