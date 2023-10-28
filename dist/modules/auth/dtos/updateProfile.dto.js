"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserProfileAdminSideDTO = exports.UpdateUserProfileDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateUserProfileDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { password: { required: true, type: () => String }, firstname: { required: true, type: () => String }, lastname: { required: true, type: () => String }, birthdate: { required: true, type: () => String }, gender: { required: true, type: () => String }, email: { required: true, type: () => String }, favorites: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'password', example: '123456' }),
    tslib_1.__metadata("design:type", String)
], UpdateUserProfileDTO.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateUserProfileDTO.prototype, "firstname", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateUserProfileDTO.prototype, "lastname", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateUserProfileDTO.prototype, "birthdate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateUserProfileDTO.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ format: 'email', example: 'todo@example.com' }),
    tslib_1.__metadata("design:type", String)
], UpdateUserProfileDTO.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: [String],
        format: 'favorites',
        example: ['tag1', 'tag2'],
    }),
    tslib_1.__metadata("design:type", String)
], UpdateUserProfileDTO.prototype, "favorites", void 0);
exports.UpdateUserProfileDTO = UpdateUserProfileDTO;
class UpdateUserProfileAdminSideDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { firstname: { required: true, type: () => String }, lastname: { required: true, type: () => String }, birthdate: { required: true, type: () => String }, status: { required: true, type: () => String }, email: { required: true, type: () => String }, phoneNumber: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateUserProfileAdminSideDTO.prototype, "firstname", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateUserProfileAdminSideDTO.prototype, "lastname", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateUserProfileAdminSideDTO.prototype, "birthdate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateUserProfileAdminSideDTO.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ format: 'email', example: 'todo@example.com' }),
    tslib_1.__metadata("design:type", String)
], UpdateUserProfileAdminSideDTO.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateUserProfileAdminSideDTO.prototype, "phoneNumber", void 0);
exports.UpdateUserProfileAdminSideDTO = UpdateUserProfileAdminSideDTO;
