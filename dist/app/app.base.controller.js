"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppBaseController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const _configs_1 = tslib_1.__importDefault(require("../configs"));
let AppBaseController = class AppBaseController {
    constructor(appConfig) {
        this.appConfig = appConfig;
    }
    getAppConfig() {
        const { name, host, port } = this.appConfig;
        return { name, host, port };
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiExcludeEndpoint)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Object)
], AppBaseController.prototype, "getAppConfig", null);
AppBaseController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__param(0, (0, common_1.Inject)(`CONFIGURATION(${_configs_1.default.App})`)),
    tslib_1.__metadata("design:paramtypes", [Object])
], AppBaseController);
exports.AppBaseController = AppBaseController;
