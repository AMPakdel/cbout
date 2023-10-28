"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const country_controller_1 = require("./country.controller");
const country_service_1 = require("./country.service");
const countries_entity_1 = require("../../entities/countries.entity");
let CountriesModule = class CountriesModule {
};
CountriesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([countries_entity_1.Countries])],
        controllers: [country_controller_1.CountriesController],
        providers: [country_service_1.CountriesService],
    })
], CountriesModule);
exports.CountriesModule = CountriesModule;
