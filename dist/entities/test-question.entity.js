"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestQuestion = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const test_entity_1 = require("./test.entity");
let TestQuestion = class TestQuestion extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "question", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "type", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "choiceOne", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "choiceTwo", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "choiceThree", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "choiceFour", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "trueChoice", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "picName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "picPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => test_entity_1.Test, (test) => test.testQuestions, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'test_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", test_entity_1.Test)
], TestQuestion.prototype, "test", void 0);
TestQuestion = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], TestQuestion);
exports.TestQuestion = TestQuestion;
