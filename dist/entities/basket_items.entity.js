"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketItems = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const basket_entity_1 = require("./basket.entity");
let BasketItems = class BasketItems extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], BasketItems.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Object)
], BasketItems.prototype, "courseDetails", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => basket_entity_1.Basket, (basket) => basket.basketItems),
    (0, typeorm_1.JoinColumn)({ name: 'basket_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", basket_entity_1.Basket)
], BasketItems.prototype, "basket", void 0);
BasketItems = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], BasketItems);
exports.BasketItems = BasketItems;
