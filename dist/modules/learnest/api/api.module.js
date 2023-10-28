"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const api_service_1 = require("./api.service");
let ApiModule = class ApiModule {
};
ApiModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [],
        providers: [api_service_1.ApiService],
        exports: [api_service_1.ApiService],
    })
], ApiModule);
exports.ApiModule = ApiModule;
