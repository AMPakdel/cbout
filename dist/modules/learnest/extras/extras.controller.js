"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtrasController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const extras_service_1 = require("./extras.service");
const swagger_1 = require("@nestjs/swagger");
const extras_dto_1 = require("./dto/extras.dto");
let ExtrasController = class ExtrasController {
    constructor(extrasService) {
        this.extrasService = extrasService;
    }
    details(id) {
        return this.extrasService.details(id);
    }
    getAllExtras() {
        return this.extrasService.getAllExtras();
    }
    getCrossword(id) {
        return this.extrasService.getCrossword(id);
    }
    completeExtra(body) {
        return this.extrasService.completeExtra(body);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "دریافت جزئیات یک آیتم از یک بخش سرگرمی به غیر از جدول" }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], ExtrasController.prototype, "details", null);
tslib_1.__decorate([
    (0, common_1.Get)('/all'),
    (0, swagger_1.ApiOperation)({ summary: "دریافت لیست تمامی آیتم های سرگمی مثل  داستان صوتی، پادکست، جدول و ..." }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ExtrasController.prototype, "getAllExtras", null);
tslib_1.__decorate([
    (0, common_1.Get)('/crossword'),
    (0, swagger_1.ApiOperation)({ summary: "دریافت جزئیات آیتم جدول" }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], ExtrasController.prototype, "getCrossword", null);
tslib_1.__decorate([
    (0, common_1.Post)('/complete'),
    (0, swagger_1.ApiOperation)({ summary: "کامل کردن درصدی از یک آتم از یک بخش از سرگرمی و دریافت جم" }),
    (0, swagger_1.ApiBody)({ type: extras_dto_1.CompleteExtraDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [extras_dto_1.CompleteExtraDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], ExtrasController.prototype, "completeExtra", null);
ExtrasController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Learnest / Extras'),
    (0, common_1.Controller)({ path: '/learnest/extra', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [extras_service_1.ExtrasService])
], ExtrasController);
exports.ExtrasController = ExtrasController;
