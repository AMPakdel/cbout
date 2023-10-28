"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebRegisterDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class WebRegisterDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, displayName: { required: true, type: () => String }, password: { required: true, type: () => String }, acceptTermsConditions: { required: true, type: () => Boolean }, acceptNewsletter: { required: true, type: () => Boolean } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ format: 'email', example: 'todo@example.com' }),
    tslib_1.__metadata("design:type", String)
], WebRegisterDTO.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'displayName', example: 'your name' }),
    tslib_1.__metadata("design:type", String)
], WebRegisterDTO.prototype, "displayName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'password', example: 'your password' }),
    tslib_1.__metadata("design:type", String)
], WebRegisterDTO.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({
        format: 'acceptTermsConditions',
        example: 'accept Terms Conditions',
    }),
    tslib_1.__metadata("design:type", Boolean)
], WebRegisterDTO.prototype, "acceptTermsConditions", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({
        format: 'acceptNewsletter',
        example: 'accept Newsletter',
    }),
    tslib_1.__metadata("design:type", Boolean)
], WebRegisterDTO.prototype, "acceptNewsletter", void 0);
exports.WebRegisterDTO = WebRegisterDTO;
