"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const test_question_entity_1 = require("./test-question.entity");
const user_answers_entity_1 = require("./user-answers.entity");
let Answer = class Answer extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Answer.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Answer.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    tslib_1.__metadata("design:type", Number)
], Answer.prototype, "rate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    tslib_1.__metadata("design:type", Number)
], Answer.prototype, "order", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => test_question_entity_1.TestQuestion, (testQuestion) => testQuestion.answers),
    tslib_1.__metadata("design:type", Object)
], Answer.prototype, "test_question", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => user_answers_entity_1.UserAnswers, (userAnswers) => userAnswers.answer, {
        cascade: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Answer.prototype, "user_answers", void 0);
Answer = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Answer);
exports.Answer = Answer;
