"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileChest = void 0;
const tslib_1 = require("tslib");
const courseContent_entity_1 = require("./courseContent.entity");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let FileChest = class FileChest extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], FileChest.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true, default: 16106127360 }),
    tslib_1.__metadata("design:type", Number)
], FileChest.prototype, "maxVolume", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    tslib_1.__metadata("design:type", Number)
], FileChest.prototype, "usedVolume", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => courseContent_entity_1.CourseContent, (courseContent) => courseContent.fileChest),
    tslib_1.__metadata("design:type", Array)
], FileChest.prototype, "courseContent", void 0);
FileChest = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], FileChest);
exports.FileChest = FileChest;
