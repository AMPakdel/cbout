"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const user_module_1 = require("../../modules/user/user.module");
const role_module_1 = require("../../modules/role/role.module");
const admin_protected_controller_1 = require("./admin.protected.controller");
const user_protected_controller_1 = require("./user.protected.controller");
const role_protected_controller_1 = require("./role.protected.controller");
let AdminModule = class AdminModule {
};
AdminModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, role_module_1.RoleModule],
        providers: [],
        controllers: [admin_protected_controller_1.AdminProtectedController, user_protected_controller_1.UsersController, role_protected_controller_1.RolesController],
    })
], AdminModule);
exports.AdminModule = AdminModule;
