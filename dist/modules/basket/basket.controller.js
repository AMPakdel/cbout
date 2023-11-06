"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const basket_service_1 = require("./basket.service");
const basket_dto_1 = require("./basket.dto");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const user_entity_1 = require("../../entities/user.entity");
let BasketController = class BasketController {
    constructor(basketService) {
        this.basketService = basketService;
    }
    async getAllBasketItems(req) {
        const uuid = req.payload.uuid;
        return this.basketService.getAllBasketItems(uuid);
    }
    async addBasketItem(req, createCourseDetailsDto) {
        const uuid = req.payload.uuid;
        return this.basketService.addBasketItem(uuid, createCourseDetailsDto);
    }
    async deleteBasketItem(uuid) {
        return this.basketService.deleteBasketItem(uuid);
    }
    async checkoutBasket(req, createOrderDto) {
        const uuid = req.payload.uuid;
        return this.basketService.checkoutBasket(uuid, createOrderDto);
    }
    async checkDiscountCode(code) {
        return await this.basketService.checkDiscountCode(code);
    }
    async getUserOrders(req, body) {
        const uuid = req.payload.uuid;
        const { search, sort, filter, page = 1 } = body;
        return this.basketService.getUserOrders(uuid, page, search, sort, filter);
    }
    async getAdminOrders(req, body) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            const { search, sort, filter, page = 1 } = body;
            return this.basketService.getAdminOrders(page, search, sort, filter);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all basket items' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BasketController.prototype, "getAllBasketItems", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Add basket item' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, basket_dto_1.CreateCourseDetailsDto]),
    tslib_1.__metadata("design:returntype", Promise)
], BasketController.prototype, "addBasketItem", null);
tslib_1.__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete basket item' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Query)('uuid')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BasketController.prototype, "deleteBasketItem", null);
tslib_1.__decorate([
    (0, common_1.Post)('/checkout'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Checkout basket and create order' }),
    openapi.ApiResponse({ status: 201, type: require("../../entities/order.entity").Order }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, basket_dto_1.createOrderDto]),
    tslib_1.__metadata("design:returntype", Promise)
], BasketController.prototype, "checkoutBasket", null);
tslib_1.__decorate([
    (0, common_1.Get)('/checkDiscountCode'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Check discount code' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('code')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], BasketController.prototype, "checkDiscountCode", null);
tslib_1.__decorate([
    (0, common_1.Post)('/orders'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get user orders' }),
    (0, decorator_1.ApiCrudQueries)(),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BasketController.prototype, "getUserOrders", null);
tslib_1.__decorate([
    (0, common_1.Post)('/admin/orders'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get user orders' }),
    (0, decorator_1.ApiCrudQueries)(),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BasketController.prototype, "getAdminOrders", null);
BasketController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Basket'),
    (0, common_1.Controller)({ path: '/basket', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [basket_service_1.BasketService])
], BasketController);
exports.BasketController = BasketController;
