"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvincesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const province_service_1 = require("./province.service");
const province_controller_1 = require("./province.controller");
const provinces_entity_1 = require("../../entities/provinces.entity");
let ProvincesModule = class ProvincesModule {
};
ProvincesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([provinces_entity_1.Provinces])],
        controllers: [province_controller_1.ProvincesController],
        providers: [province_service_1.ProvincesService],
    })
], ProvincesModule);
exports.ProvincesModule = ProvincesModule;
