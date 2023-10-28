"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../entities/user.entity");
const user_service_1 = require("./user.service");
const user_roles_entity_1 = require("../../entities/user-roles.entity");
const role_module_1 = require("../role/role.module");
const user_protected_controller_1 = require("../../platforms/admin/user.protected.controller");
const role_entity_1 = require("../../entities/role.entity");
let UserModule = class UserModule {
};
UserModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, role_entity_1.Role, user_roles_entity_1.UserRoles]), role_module_1.RoleModule],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService],
        controllers: [user_protected_controller_1.UsersController],
    })
], UserModule);
exports.UserModule = UserModule;
