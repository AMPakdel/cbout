"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseContent = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const fileChest_entity_1 = require("./fileChest.entity");
let CourseContent = class CourseContent extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], CourseContent.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], CourseContent.prototype, "fileName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], CourseContent.prototype, "fileOriginalName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], CourseContent.prototype, "filePath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], CourseContent.prototype, "extension", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], CourseContent.prototype, "size", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => fileChest_entity_1.FileChest, (fileChest) => fileChest.courseContent),
    (0, typeorm_1.JoinColumn)({ name: 'fileChest_uuid' }),
    tslib_1.__metadata("design:type", fileChest_entity_1.FileChest)
], CourseContent.prototype, "fileChest", void 0);
CourseContent = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], CourseContent);
exports.CourseContent = CourseContent;
