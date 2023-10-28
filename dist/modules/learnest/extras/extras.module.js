"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtrasModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const extras_controller_1 = require("./extras.controller");
const extras_service_1 = require("./extras.service");
const api_module_1 = require("../api/api.module");
let ExtrasModule = class ExtrasModule {
};
ExtrasModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [api_module_1.ApiModule],
        controllers: [extras_controller_1.ExtrasController],
        providers: [extras_service_1.ExtrasService],
    })
], ExtrasModule);
exports.ExtrasModule = ExtrasModule;
