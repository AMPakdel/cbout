"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountCode = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let DiscountCode = class DiscountCode {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], DiscountCode.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], DiscountCode.prototype, "code", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    tslib_1.__metadata("design:type", Number)
], DiscountCode.prototype, "discountValue", void 0);
DiscountCode = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], DiscountCode);
exports.DiscountCode = DiscountCode;
