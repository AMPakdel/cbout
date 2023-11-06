"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Academy = exports.Gender = exports.Type = exports.Steps = exports.AcademyStatus = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
var AcademyStatus;
(function (AcademyStatus) {
    AcademyStatus["ApprovePending"] = "APPROVE_PENDING";
    AcademyStatus["FillingInformation"] = "Filling_information";
    AcademyStatus["Approved"] = "APPROVED";
    AcademyStatus["Banned"] = "BANNED";
})(AcademyStatus = exports.AcademyStatus || (exports.AcademyStatus = {}));
var Steps;
(function (Steps) {
    Steps["FirstStep"] = "First_Step";
    Steps["SecondStep"] = "Second_Step";
    Steps["ThirdStep"] = "Third_Step";
    Steps["FourthStep"] = "Fourth_Step";
    Steps["FifthStep"] = "Fifth_Step";
})(Steps = exports.Steps || (exports.Steps = {}));
var Type;
(function (Type) {
    Type["LegalPerson"] = "LegalPerson";
    Type["NaturalPerson"] = "NaturalPerson";
})(Type = exports.Type || (exports.Type = {}));
var Gender;
(function (Gender) {
    Gender["Female"] = "Female";
    Gender["Male"] = "Male";
    Gender["PreferNotToSay"] = "Prefer Not To Say";
})(Gender = exports.Gender || (exports.Gender = {}));
let Academy = class Academy extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ enum: Type, nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "birthdate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "nationalCode", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "zipCode", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "father", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "address", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ enum: Gender, nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Academy.prototype, "grade", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Academy.prototype, "major", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "companyName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "companyZipCode", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "companyRegistrationNum", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "chairmanNationalCode", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "chairmanName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "companyRegistrationDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "companyAddress", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Academy.prototype, "country_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Academy.prototype, "province_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Academy.prototype, "city_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "naturalPersonPicName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "naturalPersonPicPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "naturalPersonIDPicName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "naturalPersonIDPicPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "naturalPersonBookletPicName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "naturalPersonBookletPicPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "legalPersonLogoName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "legalPersonLogoPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "legalPersonCompanyArticle", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "legalPersonCompanyArticlePath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "legalPersonNewsPaper", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "legalPersonNewsPaperPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "chairmanIDPicName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "chairmanIDPicPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "chairmanBookletPicName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "chairmanBookletPicPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Academy.prototype, "acceptTermsConditions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "iban", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ enum: AcademyStatus, default: AcademyStatus.ApprovePending }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ enum: Steps }),
    tslib_1.__metadata("design:type", String)
], Academy.prototype, "step", void 0);
Academy = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Academy);
exports.Academy = Academy;
