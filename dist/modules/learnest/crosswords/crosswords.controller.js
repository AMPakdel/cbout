"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrosswordsController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const crosswords_service_1 = require("./crosswords.service");
const swagger_1 = require("@nestjs/swagger");
const crosswords_dto_1 = require("./dto/crosswords.dto");
let CrosswordsController = class CrosswordsController {
    constructor(crosswordsService) {
        this.crosswordsService = crosswordsService;
    }
    getToAnswer(id) {
        return this.crosswordsService.getToAnswer(id);
    }
    dashboard(body) {
        return this.crosswordsService.answerToCrossword(body);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/answer'),
    (0, swagger_1.ApiOperation)({ summary: "دریافت جواب جدول" }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], CrosswordsController.prototype, "getToAnswer", null);
tslib_1.__decorate([
    (0, common_1.Post)('/answer'),
    (0, swagger_1.ApiOperation)({ summary: "ارسال پاسخ یک ردیف یا ستون جدول به صورت آرایه کارکترها" }),
    (0, swagger_1.ApiBody)({ type: crosswords_dto_1.AnswerToCrosswordDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [crosswords_dto_1.AnswerToCrosswordDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], CrosswordsController.prototype, "dashboard", null);
CrosswordsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Learnest / Crosswords'),
    (0, common_1.Controller)({ path: '/learnest/crossword', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [crosswords_service_1.CrosswordsService])
], CrosswordsController);
exports.CrosswordsController = CrosswordsController;
