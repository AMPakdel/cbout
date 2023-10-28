"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtrasService = void 0;
const tslib_1 = require("tslib");
const _configs_1 = tslib_1.__importDefault(require("../../../configs"));
const common_1 = require("@nestjs/common");
const api_service_1 = require("../api/api.service");
const config_1 = require("nestjs-xion/config");
const api_exeption_1 = require("../api/api.exeption");
let ExtrasService = class ExtrasService {
    constructor(apiService, config) {
        this.apiService = apiService;
        this.config = config;
        this.learnestConfig = this.config.get(_configs_1.default.Learnest);
    }
    async getAllExtras() {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Extras_GetAllExtras);
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const extras = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!extras) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return extras;
    }
    async getCrossword(id) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Extras_GetCrossword, { id });
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        const crossword = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!crossword) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return crossword;
    }
    async completeExtra(value) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Extras_CompleteExtra, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async details(Id) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Extras_Details, { Id });
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        const details = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!details) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return details;
    }
};
ExtrasService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [api_service_1.ApiService, config_1.ConfigService])
], ExtrasService);
exports.ExtrasService = ExtrasService;
