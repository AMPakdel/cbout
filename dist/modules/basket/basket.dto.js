"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderDto = exports.CreateCourseDetailsDto = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCourseDetailsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, institute: { required: true, type: () => String }, tutor: { required: true, type: () => String }, duration: { required: true, type: () => String }, sessions: { required: true, type: () => Number, minimum: 0 }, students: { required: true, type: () => Number, minimum: 0 }, discount: { required: true, type: () => Number, minimum: 0 }, unit_price: { required: true, type: () => Number, minimum: 0 }, rate: { required: true, type: () => Number, minimum: 0 } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: 'Course Title' }),
    tslib_1.__metadata("design:type", String)
], CreateCourseDetailsDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: 'Institute' }),
    tslib_1.__metadata("design:type", String)
], CreateCourseDetailsDto.prototype, "institute", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: 'tutor' }),
    tslib_1.__metadata("design:type", String)
], CreateCourseDetailsDto.prototype, "tutor", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: '17:20:05' }),
    tslib_1.__metadata("design:type", String)
], CreateCourseDetailsDto.prototype, "duration", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)({ format: 'integer', example: 10 }),
    tslib_1.__metadata("design:type", Number)
], CreateCourseDetailsDto.prototype, "sessions", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)({ format: 'integer', example: 50 }),
    tslib_1.__metadata("design:type", Number)
], CreateCourseDetailsDto.prototype, "students", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)({ format: 'integer', example: 20 }),
    tslib_1.__metadata("design:type", Number)
], CreateCourseDetailsDto.prototype, "discount", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)({ format: 'integer', example: 2500000 }),
    tslib_1.__metadata("design:type", Number)
], CreateCourseDetailsDto.prototype, "unit_price", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)({ format: 'integer', example: 6 }),
    tslib_1.__metadata("design:type", Number)
], CreateCourseDetailsDto.prototype, "rate", void 0);
exports.CreateCourseDetailsDto = CreateCourseDetailsDto;
class createOrderDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { description: { required: true, type: () => String }, discount_code: { required: true, type: () => String }, acceptedTermsAndConditions: { required: true, type: () => Boolean } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: 'Order description' }),
    tslib_1.__metadata("design:type", String)
], createOrderDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: '20' }),
    tslib_1.__metadata("design:type", String)
], createOrderDto.prototype, "discount_code", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ format: 'acceptedTermsAndConditions', example: true }),
    tslib_1.__metadata("design:type", Boolean)
], createOrderDto.prototype, "acceptedTermsAndConditions", void 0);
exports.createOrderDto = createOrderDto;
