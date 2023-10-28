"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementTestsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const api_service_1 = require("../api/api.service");
const _configs_1 = tslib_1.__importDefault(require("../../../configs"));
const config_1 = require("nestjs-xion/config");
const form_data_1 = tslib_1.__importDefault(require("form-data"));
const api_exeption_1 = require("../api/api.exeption");
const students_service_1 = require("../students/students.service");
const placementTest_fake_1 = require("./placementTest.fake");
let PlacementTestsService = class PlacementTestsService {
    constructor(apiService, config, studentsService) {
        this.apiService = apiService;
        this.config = config;
        this.studentsService = studentsService;
        this.learnestConfig = this.config.get(_configs_1.default.Learnest);
    }
    async getPlacementTest(id) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.PlacementTests_Get, { id });
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        const test = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!test || !test.title) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return test;
    }
    async getAllPlacementTest() {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.PlacementTests_GetAll);
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        const tests = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!tests || !Array.isArray(tests)) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        const dashboard_data = await this.studentsService.dashboard();
        const user_level_scores = dashboard_data.level.scores;
        tests.sort((a, b) => Number(a.level.scores) - Number(b.level.scores));
        let next_level_test_is_unlocked = false;
        tests.forEach((t) => {
            if (t.level.scores <= user_level_scores) {
                t.unlocked = true;
            }
            else if (!next_level_test_is_unlocked) {
                t.unlocked = true;
                next_level_test_is_unlocked = true;
            }
            else {
                t.unlocked = false;
            }
        });
        return {
            description: placementTest_fake_1.fake_main_description,
            tests
        };
    }
    async getWithQuestionsPlacementTest(id) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.PlacementTests_GetWithQuestions, { id });
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        const tests = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!tests) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return tests;
    }
    async startTestPlacementTest(id) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.PlacementTests_StartTest, { id });
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        const test = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!test) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return test;
    }
    async finishTestPlacementTest(value) {
        var _a;
        const PlacementTestId = value.id;
        const Answers = value.answers;
        const formData = new form_data_1.default();
        formData.append('PlacementTestId', PlacementTestId);
        Answers.forEach((answer, i) => {
            formData.append('Answers[' + i + '].answerId', answer.answerId);
            formData.append('Answers[' + i + '].questionId', answer.questionId);
        });
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.PlacementTests_FinishTest, formData);
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        const test_result = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!test_result) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return test_result;
    }
};
PlacementTestsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [api_service_1.ApiService,
        config_1.ConfigService,
        students_service_1.StudentsService])
], PlacementTestsService);
exports.PlacementTestsService = PlacementTestsService;
