"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearnestService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const api_service_1 = require("./api/api.service");
const config_1 = require("nestjs-xion/config");
const _configs_1 = tslib_1.__importDefault(require("../../configs"));
const form_data_1 = tslib_1.__importDefault(require("form-data"));
const api_exeption_1 = require("./api/api.exeption");
let LearnestService = class LearnestService {
    constructor(apiService, config) {
        this.apiService = apiService;
        this.config = config;
        this.learnestConfig = this.config.get(_configs_1.default.Learnest);
    }
    async test() {
        const result = this.apiService.callLearnestApi('get', this.learnestConfig.urls.Home_Test, null, { timeout: 5000 });
        if (!result) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return result;
    }
    async getContentsSettings() {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Home_GetContentsSettings);
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const settings = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!settings) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return settings;
    }
    async report(Data, Description, ScreenShot) {
        var _a;
        const formData = new form_data_1.default();
        formData.append('Data', Data);
        formData.append('Description', Description);
        formData.append('ScreenShot', ScreenShot);
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Home_Report, formData);
        if (result.error) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
};
LearnestService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [api_service_1.ApiService,
        config_1.ConfigService])
], LearnestService);
exports.LearnestService = LearnestService;
