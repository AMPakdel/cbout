"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeitnersController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const leitners_service_1 = require("./leitners.service");
const swagger_1 = require("@nestjs/swagger");
const leitners_dto_1 = require("./dto/leitners.dto");
let LeitnersController = class LeitnersController {
    constructor(leitnersService) {
        this.leitnersService = leitnersService;
    }
    dashboard() {
        return this.leitnersService.dashboard();
    }
    getAll(is_vocab) {
        return this.leitnersService.getAll(is_vocab);
    }
    getCompleteds(is_vocab) {
        return this.leitnersService.getCompleteds(is_vocab);
    }
    addSpecificVocabToLeitner(body) {
        return this.leitnersService.addSpecificVocabToLeitner(body.vocab_id);
    }
    addtoLeitner(body) {
        return this.leitnersService.addtoLeitner(body);
    }
    updateLeitners(body) {
        return this.leitnersService.updateLeitners(body);
    }
    delete(body) {
        return this.leitnersService.delete(body.id);
    }
    leitnerUpgradeBugFix(body) {
        return this.leitnersService.leitnerUpgradeBugFix(body.page);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/dashboard'),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت اطلاعات داشبورد لایتنر' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LeitnersController.prototype, "dashboard", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت لیست لغات لایتنر' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('is_vocab')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], LeitnersController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Get)('/completeds'),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت لیست لغات یادگرفته شده در لایتنر' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('is_vocab')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], LeitnersController.prototype, "getCompleteds", null);
tslib_1.__decorate([
    (0, common_1.Post)('/add-specific-vocab'),
    (0, swagger_1.ApiOperation)({ summary: 'اضافه کردن یک لغت به لایتنر' }),
    (0, swagger_1.ApiBody)({ type: leitners_dto_1.AddSpecificVocabToLeitnerDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [leitners_dto_1.AddSpecificVocabToLeitnerDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], LeitnersController.prototype, "addSpecificVocabToLeitner", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'ساخت یک کارت و اضافه کردن آن به لایتنر' }),
    (0, swagger_1.ApiBody)({ type: leitners_dto_1.AddtoLeitnerDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [leitners_dto_1.AddtoLeitnerDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], LeitnersController.prototype, "addtoLeitner", null);
tslib_1.__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiOperation)({ summary: 'تغییر یک آیتم لایتنر به جعبه دیگر' }),
    (0, swagger_1.ApiBody)({ type: leitners_dto_1.UpdateLeitnersDTO }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [leitners_dto_1.UpdateLeitnersDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], LeitnersController.prototype, "updateLeitners", null);
tslib_1.__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({ summary: 'حذف یک آیتم لایتنر' }),
    (0, swagger_1.ApiBody)({ type: leitners_dto_1.DeleteDTO }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [leitners_dto_1.DeleteDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], LeitnersController.prototype, "delete", null);
tslib_1.__decorate([
    (0, common_1.Post)('/upgrade-bugfix'),
    (0, swagger_1.ApiOperation)({ summary: 'حل یک باگ در سیستم لایتنر؟؟؟' }),
    (0, swagger_1.ApiBody)({ type: leitners_dto_1.LeitnerUpgradeBugFixDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [leitners_dto_1.LeitnerUpgradeBugFixDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], LeitnersController.prototype, "leitnerUpgradeBugFix", null);
LeitnersController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Learnest / Leitners'),
    (0, common_1.Controller)({ path: '/learnest/leitner', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [leitners_service_1.LeitnersService])
], LeitnersController);
exports.LeitnersController = LeitnersController;
