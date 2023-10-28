"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyRequestDto = exports.PayRequestDto = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class PayRequestDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { order_id: { required: true, type: () => Number }, portal_id: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ type: Number, example: 12345 }),
    tslib_1.__metadata("design:type", Number)
], PayRequestDto.prototype, "order_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ type: Number, example: 1 }),
    tslib_1.__metadata("design:type", Number)
], PayRequestDto.prototype, "portal_id", void 0);
exports.PayRequestDto = PayRequestDto;
class VerifyRequestDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { transaction_id: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ type: Number, example: 12345 }),
    tslib_1.__metadata("design:type", Number)
], VerifyRequestDto.prototype, "transaction_id", void 0);
exports.VerifyRequestDto = VerifyRequestDto;
