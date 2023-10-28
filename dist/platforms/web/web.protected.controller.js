"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebProtectedController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("../../modules/user/user.service");
let WebProtectedController = class WebProtectedController {
    constructor(userService) {
        this.userService = userService;
    }
};
WebProtectedController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Platform [Web]'),
    (0, common_1.Controller)('api/protected/web'),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], WebProtectedController);
exports.WebProtectedController = WebProtectedController;
