"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModule = void 0;
const tslib_1 = require("tslib");
const role_entity_1 = require("../../entities/role.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const role_service_1 = require("./role.service");
let RoleModule = class RoleModule {
};
RoleModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([role_entity_1.Role])],
        providers: [role_service_1.RoleService],
        exports: [role_service_1.RoleService],
    })
], RoleModule);
exports.RoleModule = RoleModule;
