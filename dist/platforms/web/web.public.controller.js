"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebPublicController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const decorator_1 = require("nestjs-xion/decorator");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("../../modules/user/user.service");
const mail_service_1 = require("../../modules/mail/mail.service");
let WebPublicController = class WebPublicController {
    constructor(userService, mailService) {
        this.userService = userService;
        this.mailService = mailService;
    }
    async createUserDB() {
        return;
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('create_user_db'),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED }),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WebPublicController.prototype, "createUserDB", null);
WebPublicController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Platform [Web]'),
    (0, common_1.Controller)('api/user'),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService,
        mail_service_1.MailService])
], WebPublicController);
exports.WebPublicController = WebPublicController;
