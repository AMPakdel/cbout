"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInstituteDTO = exports.AssignPublicationDTO = exports.UpdateStatusDTO = exports.InstituteRegisterDTO = exports.RegisterDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const institute_entity_1 = require("../../../entities/institute.entity");
class RegisterDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String }, phoneNumber: { required: true, type: () => String }, password: { required: true, type: () => String }, firstname: { required: true, type: () => String }, lastname: { required: true, type: () => String }, birthdate: { required: true, type: () => String }, email: { required: true, type: () => String }, country_id: { required: true, type: () => Number }, province_id: { required: true, type: () => Number }, city_id: { required: true, type: () => Number }, acceptTermsConditions: { required: true, type: () => Boolean } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], RegisterDTO.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], RegisterDTO.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'password', example: '123456' }),
    tslib_1.__metadata("design:type", String)
], RegisterDTO.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], RegisterDTO.prototype, "firstname", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], RegisterDTO.prototype, "lastname", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], RegisterDTO.prototype, "birthdate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ format: 'email', example: 'todo@example.com' }),
    tslib_1.__metadata("design:type", String)
], RegisterDTO.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], RegisterDTO.prototype, "country_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], RegisterDTO.prototype, "province_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], RegisterDTO.prototype, "city_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], RegisterDTO.prototype, "acceptTermsConditions", void 0);
exports.RegisterDTO = RegisterDTO;
class InstituteRegisterDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String }, phoneNumber: { required: true, type: () => String }, password: { required: true, type: () => String }, instituteName: { required: true, type: () => String }, province_id: { required: true, type: () => Number }, address: { required: true, type: () => String }, email: { required: true, type: () => String }, description: { required: true, type: () => String }, website: { required: true, type: () => String }, classificationUuid: { required: true, type: () => String }, acceptTermsConditions: { required: true, type: () => Boolean } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], InstituteRegisterDTO.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], InstituteRegisterDTO.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'password', example: '123456' }),
    tslib_1.__metadata("design:type", String)
], InstituteRegisterDTO.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], InstituteRegisterDTO.prototype, "instituteName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], InstituteRegisterDTO.prototype, "province_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, example: 'Your address' }),
    tslib_1.__metadata("design:type", String)
], InstituteRegisterDTO.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ format: 'email', example: 'todo@example.com' }),
    tslib_1.__metadata("design:type", String)
], InstituteRegisterDTO.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'text', example: 'Your description' }),
    tslib_1.__metadata("design:type", String)
], InstituteRegisterDTO.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, example: 'Your website' }),
    tslib_1.__metadata("design:type", String)
], InstituteRegisterDTO.prototype, "website", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'classification-uuid-1',
    }),
    tslib_1.__metadata("design:type", String)
], InstituteRegisterDTO.prototype, "classificationUuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], InstituteRegisterDTO.prototype, "acceptTermsConditions", void 0);
exports.InstituteRegisterDTO = InstituteRegisterDTO;
class UpdateStatusDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, enum: require("../../../entities/institute.entity").InstituteStatus } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(institute_entity_1.InstituteStatus),
    (0, swagger_1.ApiProperty)({ type: String, example: institute_entity_1.InstituteStatus.Approved }),
    tslib_1.__metadata("design:type", String)
], UpdateStatusDTO.prototype, "status", void 0);
exports.UpdateStatusDTO = UpdateStatusDTO;
class AssignPublicationDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { publicationUuid: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'publicationUuid',
    }),
    tslib_1.__metadata("design:type", String)
], AssignPublicationDTO.prototype, "publicationUuid", void 0);
exports.AssignPublicationDTO = AssignPublicationDTO;
class UpdateInstituteDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String }, phoneNumber: { required: true, type: () => String }, instituteName: { required: true, type: () => String }, province_id: { required: true, type: () => Number }, address: { required: true, type: () => String }, email: { required: true, type: () => String }, description: { required: true, type: () => String }, website: { required: true, type: () => String }, classificationUuid: { required: true, type: () => String }, acceptTermsConditions: { required: true, type: () => Boolean } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateInstituteDTO.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateInstituteDTO.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateInstituteDTO.prototype, "instituteName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], UpdateInstituteDTO.prototype, "province_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, example: 'Your address' }),
    tslib_1.__metadata("design:type", String)
], UpdateInstituteDTO.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ format: 'email', example: 'todo@example.com' }),
    tslib_1.__metadata("design:type", String)
], UpdateInstituteDTO.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'text', example: 'Your description' }),
    tslib_1.__metadata("design:type", String)
], UpdateInstituteDTO.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, example: 'Your website' }),
    tslib_1.__metadata("design:type", String)
], UpdateInstituteDTO.prototype, "website", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'classification-uuid-1',
    }),
    tslib_1.__metadata("design:type", String)
], UpdateInstituteDTO.prototype, "classificationUuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], UpdateInstituteDTO.prototype, "acceptTermsConditions", void 0);
exports.UpdateInstituteDTO = UpdateInstituteDTO;
