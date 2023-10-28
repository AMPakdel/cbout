"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkService = void 0;
const tslib_1 = require("tslib");
const _configs_1 = tslib_1.__importDefault(require("../../../configs"));
const common_1 = require("@nestjs/common");
const api_service_1 = require("../api/api.service");
const config_1 = require("nestjs-xion/config");
const api_exeption_1 = require("../api/api.exeption");
let BookmarkService = class BookmarkService {
    constructor(apiService, config) {
        this.apiService = apiService;
        this.config = config;
        this.learnestConfig = this.config.get(_configs_1.default.Learnest);
    }
    async bookmarks() {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Bookmark_Bookmarks);
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const dashboard = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!dashboard) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return dashboard;
    }
    async questions(bookmarkId) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Bookmark_Questions, { bookmarkId });
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        const questions = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!questions || !Array.isArray(questions)) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return questions;
    }
    async createBookmark(name) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Bookmark_CreateBookmark, { name });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const bookmark = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!bookmark) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return bookmark;
    }
    async deleteBookmark(bookmarkId) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Bookmark_DeleteBookmark, { bookmarkId });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async addQuestion(value) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Bookmark_AddQuestion, value);
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async deleteQuestion(questionId) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Bookmark_DeleteQuestion, { questionId });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const delete_res = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!delete_res) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        return delete_res;
    }
};
BookmarkService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [api_service_1.ApiService, config_1.ConfigService])
], BookmarkService);
exports.BookmarkService = BookmarkService;
