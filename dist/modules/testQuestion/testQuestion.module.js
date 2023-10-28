"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestQuestionModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const testQuestion_service_1 = require("./testQuestion.service");
const testQuestion_controller_1 = require("./testQuestion.controller");
const test_entity_1 = require("../../entities/test.entity");
const test_question_entity_1 = require("../../entities/test-question.entity");
let TestQuestionModule = class TestQuestionModule {
};
TestQuestionModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([test_entity_1.Test, test_question_entity_1.TestQuestion])],
        controllers: [testQuestion_controller_1.TestQuestionController],
        providers: [testQuestion_service_1.TestQuestionService],
    })
], TestQuestionModule);
exports.TestQuestionModule = TestQuestionModule;
