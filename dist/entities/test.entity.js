"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.Type = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const test_question_entity_1 = require("./test-question.entity");
var Type;
(function (Type) {
    Type["MultipleChoice"] = "MultipleChoice";
})(Type = exports.Type || (exports.Type = {}));
let Test = class Test extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    tslib_1.__metadata("design:type", Boolean)
], Test.prototype, "shuffleQuestions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    tslib_1.__metadata("design:type", Boolean)
], Test.prototype, "shuffleChoices", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => test_question_entity_1.TestQuestion, (testQuestion) => testQuestion.test),
    tslib_1.__metadata("design:type", Array)
], Test.prototype, "testQuestions", void 0);
Test = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Test);
exports.Test = Test;
