"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVideoDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const products_entity_1 = require("../../entities/products.entity");
const class_transformer_1 = require("class-transformer");
class CreateVideoDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, director: { required: true, type: () => String }, producer: { required: true, type: () => String }, duration: { required: true, type: () => String }, release_date: { required: true, type: () => Date }, tags: { required: true, type: () => String }, description: { required: true, type: () => String }, isInLibrary: { required: true, type: () => Boolean }, library: { required: true, enum: require("../../entities/products.entity").Library }, picName: { required: true, type: () => String }, videoName: { required: true, type: () => String }, classificationUuid: { required: true, type: () => String }, product_uuid: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: String, example: 'video Title' }),
    tslib_1.__metadata("design:type", String)
], CreateVideoDTO.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String, example: 'director name' }),
    tslib_1.__metadata("design:type", String)
], CreateVideoDTO.prototype, "director", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String, example: 'producer name' }),
    tslib_1.__metadata("design:type", String)
], CreateVideoDTO.prototype, "producer", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String, example: '1h 24min' }),
    tslib_1.__metadata("design:type", String)
], CreateVideoDTO.prototype, "duration", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: Date, example: '2023-10-11' }),
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", Date)
], CreateVideoDTO.prototype, "release_date", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: [String],
        format: 'tags',
        example: ['tag1', 'tag2'],
    }),
    tslib_1.__metadata("design:type", String)
], CreateVideoDTO.prototype, "tags", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'text', example: 'Your description' }),
    tslib_1.__metadata("design:type", String)
], CreateVideoDTO.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    (0, class_transformer_1.Type)(() => Boolean),
    (0, class_transformer_1.Transform)(({ obj, key }) => {
        return obj[key] === 'true' ? true : obj[key] === 'false' ? false : obj[key];
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateVideoDTO.prototype, "isInLibrary", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(products_entity_1.Library),
    (0, swagger_1.ApiProperty)({ enum: products_entity_1.Library, example: products_entity_1.Library.Public }),
    tslib_1.__metadata("design:type", String)
], CreateVideoDTO.prototype, "library", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], CreateVideoDTO.prototype, "picName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], CreateVideoDTO.prototype, "videoName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'classification-uuid-1',
    }),
    tslib_1.__metadata("design:type", String)
], CreateVideoDTO.prototype, "classificationUuid", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'product-uuid' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateVideoDTO.prototype, "product_uuid", void 0);
exports.CreateVideoDTO = CreateVideoDTO;
