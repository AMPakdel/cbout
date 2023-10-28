"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const products_entity_1 = require("./products.entity");
const classification_entity_1 = require("./classification.entity");
let Video = class Video extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "director", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "producer", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "duration", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Date)
], Video.prototype, "release_date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "tags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], Video.prototype, "isInLibrary", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "library", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "picName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "picPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "videoName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Video.prototype, "videoPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => classification_entity_1.Classification, (classification) => classification.videos),
    (0, typeorm_1.JoinColumn)({ name: 'classification_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", classification_entity_1.Classification)
], Video.prototype, "classification", void 0);
Video = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Video);
exports.Video = Video;
