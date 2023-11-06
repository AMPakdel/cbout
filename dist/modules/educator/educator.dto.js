"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsAndConditionsDto = exports.BankInfoDto = exports.DocumentsInfoDto = exports.PersonalInfoDto = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const academy_entity_1 = require("../../entities/academy.entity");
const swagger_1 = require("@nestjs/swagger");
class PersonalInfoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => String }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, birthdate: { required: true, type: () => String }, nationalCode: { required: true, type: () => String }, zipCode: { required: true, type: () => String }, father: { required: true, type: () => String }, address: { required: true, type: () => String }, gender: { required: true, type: () => String }, grade: { required: true, type: () => Number }, major: { required: true, type: () => Number }, email: { required: true, type: () => String }, country_id: { required: true, type: () => Number }, province_id: { required: true, type: () => Number }, city_id: { required: true, type: () => Number }, companyName: { required: true, type: () => String }, companyZipCode: { required: true, type: () => String }, companyRegistrationNum: { required: true, type: () => String }, chairmanNationalCode: { required: true, type: () => String }, chairmanName: { required: true, type: () => String }, companyRegistrationDate: { required: true, type: () => String }, companyAddress: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        enum: academy_entity_1.Type,
        example: academy_entity_1.Type.NaturalPerson,
        default: academy_entity_1.Type.NaturalPerson,
    }),
    (0, class_validator_1.IsEnum)(academy_entity_1.Type),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "type", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'Doe' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: '1990-01-01' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "birthdate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 123456789 }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "nationalCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: '12345' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "zipCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'John Doe Sr.' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "father", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: '123 Main St' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ enum: academy_entity_1.Gender, example: academy_entity_1.Gender.Female }),
    (0, class_validator_1.IsEnum)(academy_entity_1.Gender),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], PersonalInfoDto.prototype, "grade", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], PersonalInfoDto.prototype, "major", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'john.doe@example.com' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], PersonalInfoDto.prototype, "country_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 2 }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], PersonalInfoDto.prototype, "province_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 3 }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], PersonalInfoDto.prototype, "city_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'My Company Name' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "companyName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: '12345' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "companyZipCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'ABC123456' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "companyRegistrationNum", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: '123456789' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "chairmanNationalCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "chairmanName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'date', example: '2023-01-01' }),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "companyRegistrationDate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: '123 Main St, Company Building' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfoDto.prototype, "companyAddress", void 0);
exports.PersonalInfoDto = PersonalInfoDto;
class DocumentsInfoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { naturalPersonPicName: { required: true, type: () => String }, naturalPersonIDPicName: { required: true, type: () => String }, naturalPersonBookletPicName: { required: true, type: () => String }, legalPersonLogoName: { required: true, type: () => String }, legalPersonCompanyArticle: { required: true, type: () => String }, legalPersonNewsPaper: { required: true, type: () => String }, chairmanIDPicName: { required: true, type: () => String }, chairmanBookletPicName: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], DocumentsInfoDto.prototype, "naturalPersonPicName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], DocumentsInfoDto.prototype, "naturalPersonIDPicName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], DocumentsInfoDto.prototype, "naturalPersonBookletPicName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], DocumentsInfoDto.prototype, "legalPersonLogoName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], DocumentsInfoDto.prototype, "legalPersonCompanyArticle", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], DocumentsInfoDto.prototype, "legalPersonNewsPaper", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], DocumentsInfoDto.prototype, "chairmanIDPicName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], DocumentsInfoDto.prototype, "chairmanBookletPicName", void 0);
exports.DocumentsInfoDto = DocumentsInfoDto;
class BankInfoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { iban: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], BankInfoDto.prototype, "iban", void 0);
exports.BankInfoDto = BankInfoDto;
class TermsAndConditionsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { acceptTermsConditions: { required: true, type: () => Boolean } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], TermsAndConditionsDto.prototype, "acceptTermsConditions", void 0);
exports.TermsAndConditionsDto = TermsAndConditionsDto;
