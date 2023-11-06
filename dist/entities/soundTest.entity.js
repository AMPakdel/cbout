"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundTest = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let SoundTest = class SoundTest extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], SoundTest.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], SoundTest.prototype, "script", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SoundTest.prototype, "audioFileName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SoundTest.prototype, "audioFilePath", void 0);
SoundTest = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], SoundTest);
exports.SoundTest = SoundTest;
