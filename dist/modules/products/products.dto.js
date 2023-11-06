"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductsDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const products_entity_1 = require("../../entities/products.entity");
const class_transformer_1 = require("class-transformer");
class CreateProductsDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, enrollments: { required: true, type: () => Number }, type: { required: true, enum: require("../../entities/products.entity").Type }, test_type: { required: true, enum: require("../../entities/products.entity").TestType }, library: { required: true, enum: require("../../entities/products.entity").Library }, base_price: { required: true, type: () => Number }, min_price_in_discount: { required: true, type: () => Number }, price_in_library_subscription: { required: true, type: () => Number }, details: { required: true, type: () => String }, tags: { required: true, type: () => String }, isInLibrary: { required: true, type: () => Boolean }, release_date: { required: true, type: () => Date }, bookPages: { required: true, type: () => Number }, picName: { required: true, type: () => String }, bookPicName: { required: true, type: () => String }, bookFileName: { required: true, type: () => String }, classificationUuid: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: String, example: 'Sample Title' }),
    tslib_1.__metadata("design:type", String)
], CreateProductsDTO.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ type: Number, example: 10 }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    tslib_1.__metadata("design:type", Number)
], CreateProductsDTO.prototype, "enrollments", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(products_entity_1.Type),
    (0, swagger_1.ApiProperty)({ enum: products_entity_1.Type, example: products_entity_1.Type.Course }),
    tslib_1.__metadata("design:type", String)
], CreateProductsDTO.prototype, "type", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(products_entity_1.TestType),
    (0, swagger_1.ApiProperty)({ enum: products_entity_1.TestType, example: products_entity_1.TestType.IeltsGeneral }),
    tslib_1.__metadata("design:type", String)
], CreateProductsDTO.prototype, "test_type", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(products_entity_1.Library),
    (0, swagger_1.ApiProperty)({ enum: products_entity_1.Library, example: products_entity_1.Library.Public }),
    tslib_1.__metadata("design:type", String)
], CreateProductsDTO.prototype, "library", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: Number, example: 100 }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    tslib_1.__metadata("design:type", Number)
], CreateProductsDTO.prototype, "base_price", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: Number, example: 90 }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    tslib_1.__metadata("design:type", Number)
], CreateProductsDTO.prototype, "min_price_in_discount", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: Number, example: 20 }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    tslib_1.__metadata("design:type", Number)
], CreateProductsDTO.prototype, "price_in_library_subscription", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'text', example: 'Your details' }),
    tslib_1.__metadata("design:type", String)
], CreateProductsDTO.prototype, "details", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: [String],
        format: 'tags',
        example: ['tag1', 'tag2'],
    }),
    tslib_1.__metadata("design:type", String)
], CreateProductsDTO.prototype, "tags", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    (0, class_transformer_1.Type)(() => Boolean),
    (0, class_transformer_1.Transform)(({ obj, key }) => {
        return obj[key] === 'true' ? true : obj[key] === 'false' ? false : obj[key];
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateProductsDTO.prototype, "isInLibrary", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: Date, example: '2023-10-11' }),
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", Date)
], CreateProductsDTO.prototype, "release_date", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: Number, example: 150 }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    tslib_1.__metadata("design:type", Number)
], CreateProductsDTO.prototype, "bookPages", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], CreateProductsDTO.prototype, "picName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], CreateProductsDTO.prototype, "bookPicName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], CreateProductsDTO.prototype, "bookFileName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'classification-uuid-1',
    }),
    tslib_1.__metadata("design:type", String)
], CreateProductsDTO.prototype, "classificationUuid", void 0);
exports.CreateProductsDTO = CreateProductsDTO;
