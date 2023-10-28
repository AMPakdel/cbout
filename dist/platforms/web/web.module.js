"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const user_module_1 = require("../../modules/user/user.module");
const web_protected_controller_1 = require("./web.protected.controller");
const web_public_controller_1 = require("./web.public.controller");
const mail_module_1 = require("../../modules/mail/mail.module");
let WebModule = class WebModule {
};
WebModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, mail_module_1.MailModule],
        providers: [],
        controllers: [web_protected_controller_1.WebProtectedController, web_public_controller_1.WebPublicController],
    })
], WebModule);
exports.WebModule = WebModule;
