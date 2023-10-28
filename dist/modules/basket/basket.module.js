"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const basket_service_1 = require("./basket.service");
const basket_controller_1 = require("./basket.controller");
const user_entity_1 = require("../../entities/user.entity");
const basket_entity_1 = require("../../entities/basket.entity");
const order_entity_1 = require("../../entities/order.entity");
const user_module_1 = require("../user/user.module");
const basket_items_entity_1 = require("../../entities/basket_items.entity");
const orderItems_entity_1 = require("../../entities/orderItems.entity");
const discount_code_entity_1 = require("../../entities/discount-code.entity");
let BasketModule = class BasketModule {
};
BasketModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User,
                basket_entity_1.Basket,
                basket_items_entity_1.BasketItems,
                order_entity_1.Order,
                orderItems_entity_1.OrderItems,
                discount_code_entity_1.DiscountCode,
            ]),
            user_module_1.UserModule,
        ],
        controllers: [basket_controller_1.BasketController],
        providers: [basket_service_1.BasketService],
    })
], BasketModule);
exports.BasketModule = BasketModule;
