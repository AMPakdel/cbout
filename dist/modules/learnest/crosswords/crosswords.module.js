"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrosswordsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const crosswords_controller_1 = require("./crosswords.controller");
const crosswords_service_1 = require("./crosswords.service");
const api_module_1 = require("../api/api.module");
let CrosswordsModule = class CrosswordsModule {
};
CrosswordsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [api_module_1.ApiModule],
        controllers: [crosswords_controller_1.CrosswordsController],
        providers: [crosswords_service_1.CrosswordsService],
    })
], CrosswordsModule);
exports.CrosswordsModule = CrosswordsModule;
