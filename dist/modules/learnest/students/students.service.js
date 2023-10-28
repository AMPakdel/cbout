"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const tslib_1 = require("tslib");
const _configs_1 = tslib_1.__importDefault(require("../../../configs"));
const common_1 = require("@nestjs/common");
const api_service_1 = require("../api/api.service");
const config_1 = require("nestjs-xion/config");
const form_data_1 = tslib_1.__importDefault(require("form-data"));
const api_exeption_1 = require("../api/api.exeption");
let StudentsService = class StudentsService {
    constructor(apiService, config) {
        this.apiService = apiService;
        this.config = config;
        this.learnestConfig = this.config.get(_configs_1.default.Learnest);
    }
    async signup(Phone, FirstName, LastName, Gender) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Students_Signup, { Phone, FirstName, LastName, Gender, IsPhone: false });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const signup_res = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!signup_res) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return signup_res;
    }
    async login(Phone) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Students_Login, { Phone, IsPhone: false });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const login_res = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!login_res) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return login_res;
    }
    async verify(Phone, VerificationCode) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Students_Verify, { Phone, VerificationCode, IsPhone: false });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const verify_res = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!verify_res) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return verify_res;
    }
    async information() {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Students_Information);
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const information = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!information) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return information;
    }
    async refreshToken() {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Students_RefreshToken);
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const token = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!token) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return token;
    }
    async updateAvatar(input) {
        var _a;
        const formData = new form_data_1.default();
        formData.append('input', input);
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Students_UpdateAvatar, formData);
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async updateProfile(value) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Students_UpdateProfile, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async dashboard() {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Students_Dashboard);
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const dashboard = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!dashboard) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return dashboard;
    }
};
StudentsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [api_service_1.ApiService, config_1.ConfigService])
], StudentsService);
exports.StudentsService = StudentsService;
