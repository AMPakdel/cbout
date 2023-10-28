"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileServingController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const fileServing_service_1 = require("./fileServing.service");
let FileServingController = class FileServingController {
    constructor(fileServingService) {
        this.fileServingService = fileServingService;
    }
    async getFile(res, type, name) {
        return this.fileServingService.serveFile(res, type, name);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/:type/:name'),
    (0, swagger_1.ApiOperation)({ summary: 'get a file' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__param(1, (0, common_1.Param)('type')),
    tslib_1.__param(2, (0, common_1.Param)('name')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], FileServingController.prototype, "getFile", null);
FileServingController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('FileServing'),
    (0, common_1.Controller)({ path: '/file', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [fileServing_service_1.FileServingService])
], FileServingController);
exports.FileServingController = FileServingController;
