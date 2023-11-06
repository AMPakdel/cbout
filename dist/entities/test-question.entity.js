"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestQuestion = exports.QuestionLevel = exports.QuestionType = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const config_test_entity_1 = require("./config-test.entity");
const answer_entity_1 = require("./answer.entity");
const correct_answer_entity_1 = require("./correct-answer.entity");
var QuestionType;
(function (QuestionType) {
    QuestionType["MultipleChoice"] = "MultipleChoice";
    QuestionType["Matching"] = "Matching";
    QuestionType["YNB"] = "YNB";
    QuestionType["ShortAsnwer"] = "ShortAsnwer";
    QuestionType["TrueFalse"] = "TrueFalse";
})(QuestionType = exports.QuestionType || (exports.QuestionType = {}));
var QuestionLevel;
(function (QuestionLevel) {
    QuestionLevel["easy"] = "easy";
    QuestionLevel["middle"] = "middle";
    QuestionLevel["hard"] = "hard";
})(QuestionLevel = exports.QuestionLevel || (exports.QuestionLevel = {}));
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
], TestQuestion.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: QuestionLevel.easy }),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "level", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    tslib_1.__metadata("design:type", Number)
], TestQuestion.prototype, "multiple", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    tslib_1.__metadata("design:type", Number)
], TestQuestion.prototype, "order", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "picName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], TestQuestion.prototype, "picPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => config_test_entity_1.ConfigTest, (configTest) => configTest.testQuestions, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'configTest_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", config_test_entity_1.ConfigTest)
], TestQuestion.prototype, "configTest", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => answer_entity_1.Answer, (answer) => answer.test_question),
    tslib_1.__metadata("design:type", Object)
], TestQuestion.prototype, "answers", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => correct_answer_entity_1.CorrectAnswer),
    (0, typeorm_1.JoinColumn)({ name: 'correct_answer_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", Object)
], TestQuestion.prototype, "correct_answer", void 0);
TestQuestion = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], TestQuestion);
exports.TestQuestion = TestQuestion;
