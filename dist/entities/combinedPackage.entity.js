"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedPackage = exports.Type = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const products_entity_1 = require("./products.entity");
const classification_entity_1 = require("./classification.entity");
const publications_entity_1 = require("./publications.entity");
var Type;
(function (Type) {
    Type["MultipleChoice"] = "MultipleChoice";
})(Type = exports.Type || (exports.Type = {}));
let CombinedPackage = class CombinedPackage extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], CombinedPackage.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], CombinedPackage.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Date)
], CombinedPackage.prototype, "release_date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    tslib_1.__metadata("design:type", String)
], CombinedPackage.prototype, "tags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], CombinedPackage.prototype, "picName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], CombinedPackage.prototype, "picPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], CombinedPackage.prototype, "combinedFileName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], CombinedPackage.prototype, "combinedFilePath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], CombinedPackage.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], CombinedPackage.prototype, "isInLibrary", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], CombinedPackage.prototype, "library", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => classification_entity_1.Classification, (classification) => classification.combinedPackages),
    (0, typeorm_1.JoinColumn)({ name: 'classification_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", classification_entity_1.Classification)
], CombinedPackage.prototype, "classification", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => publications_entity_1.Publications, (publication) => publication.combinedPackages),
    (0, typeorm_1.JoinColumn)({ name: 'publication_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", publications_entity_1.Publications)
], CombinedPackage.prototype, "publication", void 0);
CombinedPackage = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], CombinedPackage);
exports.CombinedPackage = CombinedPackage;
