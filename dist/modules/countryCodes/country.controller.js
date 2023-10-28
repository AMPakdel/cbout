"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const country_service_1 = require("./country.service");
let CountriesController = class CountriesController {
    constructor(countriesService) {
        this.countriesService = countriesService;
    }
    async getAllCountries(req) {
        return this.countriesService.getAllCountries(req);
    }
    async getCountry(Id) {
        return this.countriesService.getCountry(Id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all countries' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, crud_1.ParsedRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesController.prototype, "getAllCountries", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a country' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesController.prototype, "getCountry", null);
CountriesController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Countries'),
    (0, common_1.Controller)({ path: '/countries', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [country_service_1.CountriesService])
], CountriesController);
exports.CountriesController = CountriesController;
