"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAdminSideDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../../entities/user.entity");
class CreateUserAdminSideDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, displayName: { required: true, type: () => String }, mobile: { required: true, type: () => String }, nationalCode: { required: true, type: () => String }, photoURL: { required: true, type: () => String }, status: { required: true, enum: require("../../../entities/user.entity").UserStatus }, roles: { required: true, type: () => [String] } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ format: 'email', example: 'todo@example.com' }),
    tslib_1.__metadata("design:type", String)
], CreateUserAdminSideDTO.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'firstName', example: '123456' }),
    tslib_1.__metadata("design:type", String)
], CreateUserAdminSideDTO.prototype, "displayName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'mobile', example: '123456' }),
    tslib_1.__metadata("design:type", String)
], CreateUserAdminSideDTO.prototype, "mobile", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'nationalCode', example: '123456' }),
    tslib_1.__metadata("design:type", String)
], CreateUserAdminSideDTO.prototype, "nationalCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ format: 'photoURL', example: '123456' }),
    tslib_1.__metadata("design:type", String)
], CreateUserAdminSideDTO.prototype, "photoURL", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'status', example: 'APPROVED' }),
    tslib_1.__metadata("design:type", String)
], CreateUserAdminSideDTO.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ format: 'roles', example: '["admin","user"]' }),
    tslib_1.__metadata("design:type", Array)
], CreateUserAdminSideDTO.prototype, "roles", void 0);
exports.CreateUserAdminSideDTO = CreateUserAdminSideDTO;
