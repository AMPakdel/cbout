"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorrectAnswer = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let CorrectAnswer = class CorrectAnswer extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], CorrectAnswer.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('simple-array'),
    tslib_1.__metadata("design:type", String)
], CorrectAnswer.prototype, "title", void 0);
CorrectAnswer = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], CorrectAnswer);
exports.CorrectAnswer = CorrectAnswer;
