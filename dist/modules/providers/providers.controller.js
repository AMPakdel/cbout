"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const providers_service_1 = require("./providers.service");
const swagger_1 = require("@nestjs/swagger");
let ProvidersController = class ProvidersController {
    constructor(providersService) {
        this.providersService = providersService;
    }
    getConfigs() {
        return this.providersService.getConfigs();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/configs'),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت کانفیگ تمامی آموزشگاه ها' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ProvidersController.prototype, "getConfigs", null);
ProvidersController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('َA0: Providers'),
    (0, common_1.Controller)({ path: '/providers', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [providers_service_1.ProvidersService])
], ProvidersController);
exports.ProvidersController = ProvidersController;
