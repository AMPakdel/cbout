"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = exports.Library = exports.Type = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const classification_entity_1 = require("./classification.entity");
const lessonPlan_entity_1 = require("./lessonPlan.entity");
const test_entity_1 = require("./test.entity");
const video_entity_1 = require("./video.entity");
const combinedPackage_entity_1 = require("./combinedPackage.entity");
const publications_entity_1 = require("./publications.entity");
var Type;
(function (Type) {
    Type["Course"] = "Course";
    Type["EducationalContent"] = "EducationalContent";
})(Type = exports.Type || (exports.Type = {}));
var Library;
(function (Library) {
    Library["None"] = "None";
    Library["Public"] = "Public";
    Library["Private"] = "Private";
    Library["Cipherland"] = "Cipherland";
})(Library = exports.Library || (exports.Library = {}));
let Products = class Products extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Products.prototype, "enrollments", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "library", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Products.prototype, "base_price", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Products.prototype, "min_price_in_discount", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Products.prototype, "price_in_library_subscription", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "details", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "tags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Products.prototype, "isInLibrary", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Date)
], Products.prototype, "release_date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Products.prototype, "bookPages", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "picName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "picPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "bookPicName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "bookPicPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "bookFileName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "bookFilePath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => classification_entity_1.Classification, (classification) => classification.products),
    (0, typeorm_1.JoinColumn)({ name: 'classification_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", classification_entity_1.Classification)
], Products.prototype, "classification", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => publications_entity_1.Publications, (publication) => publication.products),
    (0, typeorm_1.JoinColumn)({ name: 'publication_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", publications_entity_1.Publications)
], Products.prototype, "publication", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => lessonPlan_entity_1.LessonPlan, (lessonPlan) => lessonPlan.product),
    tslib_1.__metadata("design:type", Object)
], Products.prototype, "lessonPlans", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => test_entity_1.Test),
    (0, typeorm_1.JoinColumn)({ name: 'test_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", Object)
], Products.prototype, "test", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => video_entity_1.Video),
    (0, typeorm_1.JoinColumn)({ name: 'video_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", Object)
], Products.prototype, "video", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => combinedPackage_entity_1.CombinedPackage),
    (0, typeorm_1.JoinColumn)({ name: 'combinedPackage_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", Object)
], Products.prototype, "combinedPackage", void 0);
Products = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Products);
exports.Products = Products;
