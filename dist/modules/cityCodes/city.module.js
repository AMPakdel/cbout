"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cities_entity_1 = require("../../entities/cities.entity");
const countries_entity_1 = require("../../entities/countries.entity");
const provinces_entity_1 = require("../../entities/provinces.entity");
const city_service_1 = require("./city.service");
const city_controller_1 = require("./city.controller");
let CitiesModule = class CitiesModule {
};
CitiesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cities_entity_1.Cities, provinces_entity_1.Provinces, countries_entity_1.Countries])],
        controllers: [city_controller_1.CitiesController],
        providers: [city_service_1.CitiesService],
    })
], CitiesModule);
exports.CitiesModule = CitiesModule;
