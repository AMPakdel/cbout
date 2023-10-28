"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeitnersService = void 0;
const tslib_1 = require("tslib");
const _configs_1 = tslib_1.__importDefault(require("../../../configs"));
const common_1 = require("@nestjs/common");
const api_service_1 = require("../api/api.service");
const config_1 = require("nestjs-xion/config");
const api_exeption_1 = require("../api/api.exeption");
let LeitnersService = class LeitnersService {
    constructor(apiService, config) {
        this.apiService = apiService;
        this.config = config;
        this.learnestConfig = this.config.get(_configs_1.default.Learnest);
    }
    async dashboard() {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Leitners_Dashboard);
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const dashboard = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!dashboard) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return dashboard;
    }
    async getAll(isVocab) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Leitners_GetAll, { isVocab });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const dashboard = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!dashboard) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return dashboard;
    }
    async getCompleteds(isVocab) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Leitners_GetCompleteds, { isVocab });
        if (result.error) {
            return [];
        }
        const completeds = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!completeds || !Array.isArray(completeds)) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return completeds;
    }
    async addSpecificVocabToLeitner(vocabId) {
        var _a, _b, _c;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Leitners_AddSpecificVocabToLeitner, { vocabId });
        if (result.error) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        if (((_a = result.response) === null || _a === void 0 ? void 0 : _a.status) == "2") {
            throw new api_exeption_1.LearnestBaseExeption({
                code: 2,
                message: (_b = result.response) === null || _b === void 0 ? void 0 : _b.message
            });
        }
        return (_c = result.response) === null || _c === void 0 ? void 0 : _c.data;
    }
    async addtoLeitner(value) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Leitners_AddtoLeitner, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async updateLeitners(value) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Leitners_UpdateLeitners, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        const update_res = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!update_res) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return update_res;
    }
    async delete(Id) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Leitners_Delete, { Id });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async leitnerUpgradeBugFix(page) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Leitners_LeitnerUpgradeBugFix, { page });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
};
LeitnersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [api_service_1.ApiService, config_1.ConfigService])
], LeitnersService);
exports.LeitnersService = LeitnersService;
