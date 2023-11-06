"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigTest = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const products_entity_1 = require("./products.entity");
const test_question_entity_1 = require("./test-question.entity");
const user_entity_1 = require("./user.entity");
let ConfigTest = class ConfigTest extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], ConfigTest.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], ConfigTest.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], ConfigTest.prototype, "comprehension", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], ConfigTest.prototype, "comprehensionHTML", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], ConfigTest.prototype, "audioFileName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], ConfigTest.prototype, "audioFilePath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], ConfigTest.prototype, "content", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], ConfigTest.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    tslib_1.__metadata("design:type", Boolean)
], ConfigTest.prototype, "shuffleQuestions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    tslib_1.__metadata("design:type", Boolean)
], ConfigTest.prototype, "shuffleChoices", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => products_entity_1.Products, (product) => product.configTest, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'product_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", products_entity_1.Products)
], ConfigTest.prototype, "product", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.configTest, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'User_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", user_entity_1.User)
], ConfigTest.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => test_question_entity_1.TestQuestion, (testQuestion) => testQuestion.configTest),
    tslib_1.__metadata("design:type", Array)
], ConfigTest.prototype, "testQuestions", void 0);
ConfigTest = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], ConfigTest);
exports.ConfigTest = ConfigTest;
