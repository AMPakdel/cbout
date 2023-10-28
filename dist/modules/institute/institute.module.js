"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstituteModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const role_module_1 = require("../role/role.module");
const institute_entity_1 = require("../../entities/institute.entity");
const institute_service_1 = require("./institute.service");
const institute_controller_1 = require("./institute.controller");
const publications_entity_1 = require("../../entities/publications.entity");
let InstituteModule = class InstituteModule {
};
InstituteModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([institute_entity_1.InstituteOwner, publications_entity_1.Publications]),
            role_module_1.RoleModule,
        ],
        controllers: [institute_controller_1.InstituteController],
        exports: [institute_service_1.InstituteService],
        providers: [institute_service_1.InstituteService],
    })
], InstituteModule);
exports.InstituteModule = InstituteModule;
