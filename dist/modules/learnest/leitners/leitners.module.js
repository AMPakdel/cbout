"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeitnersModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const leitners_controller_1 = require("./leitners.controller");
const leitners_service_1 = require("./leitners.service");
const api_module_1 = require("../api/api.module");
let LeitnersModule = class LeitnersModule {
};
LeitnersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [api_module_1.ApiModule],
        controllers: [leitners_controller_1.LeitnersController],
        providers: [leitners_service_1.LeitnersService],
    })
], LeitnersModule);
exports.LeitnersModule = LeitnersModule;
