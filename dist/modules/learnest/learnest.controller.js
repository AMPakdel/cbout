"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearnestController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const learnest_service_1 = require("./learnest.service");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
const learnest_dto_1 = require("./learnest.dto");
let LearnestController = class LearnestController {
    constructor(learnestService) {
        this.learnestService = learnestService;
    }
    test() {
        return this.learnestService.test();
    }
    getContentsSettings() {
        return this.learnestService.getContentsSettings();
    }
    report(body, screenshot) {
        return this.learnestService.report(body.data, body.data, screenshot);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/test'),
    (0, swagger_1.ApiOperation)({ summary: "تست بالا بودن سرور لرنست" }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LearnestController.prototype, "test", null);
tslib_1.__decorate([
    (0, common_1.Get)('/rules'),
    (0, swagger_1.ApiOperation)({ summary: "دریافت قوانین اپ لرنست" }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LearnestController.prototype, "getContentsSettings", null);
tslib_1.__decorate([
    (0, common_1.Post)('/report'),
    (0, swagger_1.ApiOperation)({ summary: "ارسال گزارش مشکل به لرنست" }),
    (0, swagger_1.ApiBody)({ type: learnest_dto_1.ReportDTO }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('screenshot', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (_req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `${uniqueSuffix}${ext}`;
                callback(null, filename);
            },
        }),
    })),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.UploadedFile)('screenshot')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [learnest_dto_1.ReportDTO, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], LearnestController.prototype, "report", null);
LearnestController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Learnest / Home'),
    (0, common_1.Controller)({ path: "/learnest", version: "1" }),
    tslib_1.__metadata("design:paramtypes", [learnest_service_1.LearnestService])
], LearnestController);
exports.LearnestController = LearnestController;
