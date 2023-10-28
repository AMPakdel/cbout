"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminProtectedController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("../../modules/user/user.service");
let AdminProtectedController = class AdminProtectedController {
    constructor(userService) {
        this.userService = userService;
    }
};
AdminProtectedController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Platform [Admin]'),
    (0, common_1.Controller)('api/admin'),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], AdminProtectedController);
exports.AdminProtectedController = AdminProtectedController;
