"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const providers_controller_1 = require("./providers.controller");
const providers_service_1 = require("./providers.service");
let ProvidersModule = class ProvidersModule {
};
ProvidersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [providers_controller_1.ProvidersController],
        providers: [providers_service_1.ProvidersService],
        exports: [providers_service_1.ProvidersService],
    })
], ProvidersModule);
exports.ProvidersModule = ProvidersModule;
