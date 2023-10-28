"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Type = exports.Status = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const orderItems_entity_1 = require("./orderItems.entity");
const user_entity_1 = require("./user.entity");
var Status;
(function (Status) {
    Status["Successful"] = "Successful";
    Status["Failed"] = "Failed";
})(Status = exports.Status || (exports.Status = {}));
var Type;
(function (Type) {
    Type["Purchase"] = "Purchase";
    Type["Monthly"] = "Monthly";
})(Type = exports.Type || (exports.Type = {}));
let Order = class Order extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', {
        name: 'uuid',
        type: 'bigint',
        unsigned: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'uuid' }),
    tslib_1.__metadata("design:type", Object)
], Order.prototype, "discount_code_uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'varchar',
    }),
    tslib_1.__metadata("design:type", Object)
], Order.prototype, "discount_code", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    tslib_1.__metadata("design:type", Object)
], Order.prototype, "discountValue", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    tslib_1.__metadata("design:type", Object)
], Order.prototype, "discount_price", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ enum: Status }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: Type.Purchase }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "total_price", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "final_price", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "tracking_code", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Order.prototype, "acceptedTermsAndConditions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => orderItems_entity_1.OrderItems, (orderItem) => orderItem.order),
    tslib_1.__metadata("design:type", Array)
], Order.prototype, "orderItems", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.order),
    (0, typeorm_1.JoinColumn)({ name: 'user_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", user_entity_1.User)
], Order.prototype, "user", void 0);
Order = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Order);
exports.Order = Order;
