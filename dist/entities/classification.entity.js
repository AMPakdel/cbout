"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classification = exports.Type = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const publications_entity_1 = require("./publications.entity");
const products_entity_1 = require("./products.entity");
const video_entity_1 = require("./video.entity");
const combinedPackage_entity_1 = require("./combinedPackage.entity");
var Type;
(function (Type) {
    Type["Courses"] = "Courses";
    Type["EducationalContent"] = "EducationalContent";
    Type["Institute"] = "Institute";
})(Type = exports.Type || (exports.Type = {}));
let Classification = class Classification extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Classification.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Classification.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Classification.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    tslib_1.__metadata("design:type", Boolean)
], Classification.prototype, "isActive", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => publications_entity_1.Publications, (publication) => publication.classification, {
        onDelete: 'CASCADE',
    }),
    tslib_1.__metadata("design:type", Array)
], Classification.prototype, "publications", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => products_entity_1.Products, (product) => product.classification, {
        onDelete: 'CASCADE',
    }),
    tslib_1.__metadata("design:type", Array)
], Classification.prototype, "products", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => video_entity_1.Video, (video) => video.classification, {
        onDelete: 'CASCADE',
    }),
    tslib_1.__metadata("design:type", Array)
], Classification.prototype, "videos", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => combinedPackage_entity_1.CombinedPackage, (combinedPackage) => combinedPackage.classification, {
        onDelete: 'CASCADE',
    }),
    tslib_1.__metadata("design:type", Array)
], Classification.prototype, "combinedPackages", void 0);
Classification = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Classification);
exports.Classification = Classification;
