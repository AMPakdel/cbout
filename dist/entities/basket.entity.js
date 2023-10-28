"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basket = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_entity_1 = require("./user.entity");
const basket_items_entity_1 = require("./basket_items.entity");
let Basket = class Basket extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Basket.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => basket_items_entity_1.BasketItems, (basketItem) => basketItem.basket),
    tslib_1.__metadata("design:type", Object)
], Basket.prototype, "basketItems", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", Object)
], Basket.prototype, "user", void 0);
Basket = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Basket);
exports.Basket = Basket;
