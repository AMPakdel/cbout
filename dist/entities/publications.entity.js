"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publications = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const classification_entity_1 = require("./classification.entity");
const combinedPackage_entity_1 = require("./combinedPackage.entity");
const institute_entity_1 = require("./institute.entity");
const page_entity_1 = require("./page.entity");
const products_entity_1 = require("./products.entity");
let Publications = class Publications extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Publications.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Publications.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Publications.prototype, "province_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ type: 'text' }),
    tslib_1.__metadata("design:type", String)
], Publications.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ default: true }),
    tslib_1.__metadata("design:type", Boolean)
], Publications.prototype, "isActive", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Publications.prototype, "website", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Publications.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Publications.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)('simple-array'),
    tslib_1.__metadata("design:type", String)
], Publications.prototype, "tags", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ type: 'text' }),
    tslib_1.__metadata("design:type", String)
], Publications.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Publications.prototype, "logoFileName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Publications.prototype, "logoPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Publications.prototype, "backgroundPicName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Publications.prototype, "backgroundPicPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => classification_entity_1.Classification, (classification) => classification.publications),
    (0, typeorm_1.JoinColumn)({ name: 'classification_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", classification_entity_1.Classification)
], Publications.prototype, "classification", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => products_entity_1.Products, (product) => product.publication, {
        onDelete: 'CASCADE',
    }),
    tslib_1.__metadata("design:type", Array)
], Publications.prototype, "products", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => combinedPackage_entity_1.CombinedPackage, (combinedPackage) => combinedPackage.publication, {
        onDelete: 'CASCADE',
    }),
    tslib_1.__metadata("design:type", Array)
], Publications.prototype, "combinedPackages", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => page_entity_1.Page),
    (0, typeorm_1.JoinColumn)({ name: 'page_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", Object)
], Publications.prototype, "page", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => institute_entity_1.InstituteOwner, (instituteOwner) => instituteOwner.publication, {
        onDelete: 'CASCADE',
    }),
    tslib_1.__metadata("design:type", Array)
], Publications.prototype, "instituteOwner", void 0);
Publications = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Publications);
exports.Publications = Publications;
