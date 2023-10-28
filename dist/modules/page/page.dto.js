"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePageDto = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreatePageDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, province_id: { required: true, type: () => Number }, address: { required: true, type: () => String }, website: { required: true, type: () => String }, email: { required: true, type: () => String }, phoneNumber: { required: true, type: () => String }, classificationUuid: { required: true, type: () => String }, description: { required: true, type: () => String }, logoFile: { required: true, type: () => String }, backgroundPicFile: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, example: 'Title' }),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ format: 'integer', example: 10 }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    tslib_1.__metadata("design:type", Number)
], CreatePageDto.prototype, "province_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, example: 'Your address' }),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, example: 'Your website' }),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "website", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, example: 'todo@example.com' }),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, example: '123456' }),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'classification-uuid-1',
    }),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "classificationUuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'text', example: 'Your description' }),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "logoFile", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "backgroundPicFile", void 0);
exports.CreatePageDto = CreatePageDto;
