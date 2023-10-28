"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItems = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const order_entity_1 = require("./order.entity");
let OrderItems = class OrderItems extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], OrderItems.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Object)
], OrderItems.prototype, "courseDetails", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.Order, (order) => order.orderItems),
    (0, typeorm_1.JoinColumn)({ name: 'order_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", order_entity_1.Order)
], OrderItems.prototype, "order", void 0);
OrderItems = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], OrderItems);
exports.OrderItems = OrderItems;
