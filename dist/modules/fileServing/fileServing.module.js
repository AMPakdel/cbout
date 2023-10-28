"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileServingModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const fileServing_controller_1 = require("./fileServing.controller");
const fileServing_service_1 = require("./fileServing.service");
let FileServingModule = class FileServingModule {
};
FileServingModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [fileServing_controller_1.FileServingController],
        providers: [fileServing_service_1.FileServingService],
    })
], FileServingModule);
exports.FileServingModule = FileServingModule;
