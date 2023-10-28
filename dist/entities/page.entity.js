"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const classification_entity_1 = require("./classification.entity");
let Page = class Page extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Page.prototype, "province_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ type: 'text' }),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "website", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ type: 'text' }),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "logoFileName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "logoPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "backgroundPicName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "backgroundPicPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => classification_entity_1.Classification, (classification) => classification.publications),
    (0, typeorm_1.JoinColumn)({ name: 'classification_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", classification_entity_1.Classification)
], Page.prototype, "classification", void 0);
Page = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Page);
exports.Page = Page;
