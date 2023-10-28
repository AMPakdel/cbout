"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const city_service_1 = require("./city.service");
let CitiesController = class CitiesController {
    constructor(citiesService) {
        this.citiesService = citiesService;
    }
    async getAllCities(req) {
        return this.citiesService.getAllCities(req);
    }
    async getCity(Id) {
        return this.citiesService.getCity(Id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all cities' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, crud_1.ParsedRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesController.prototype, "getAllCities", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a city' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CitiesController.prototype, "getCity", null);
CitiesController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Cities'),
    (0, common_1.Controller)({ path: '/cities', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [city_service_1.CitiesService])
], CitiesController);
exports.CitiesController = CitiesController;
