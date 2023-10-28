"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvincesController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const province_service_1 = require("./province.service");
let ProvincesController = class ProvincesController {
    constructor(provincesService) {
        this.provincesService = provincesService;
    }
    async getAllProvinces(req) {
        return this.provincesService.getAllProvinces(req);
    }
    async getProvince(Id) {
        return this.provincesService.getProvince(Id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all provinces' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, crud_1.ParsedRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvincesController.prototype, "getAllProvinces", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a province' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvincesController.prototype, "getProvince", null);
ProvincesController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Provinces'),
    (0, common_1.Controller)({ path: '/provinces', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [province_service_1.ProvincesService])
], ProvincesController);
exports.ProvincesController = ProvincesController;
