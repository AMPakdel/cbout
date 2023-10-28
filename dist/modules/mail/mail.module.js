"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const tslib_1 = require("tslib");
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const mail_service_1 = require("./mail.service");
const config_1 = require("@nestjs/config");
const _configs_1 = tslib_1.__importDefault(require("../../configs"));
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
let MailModule = class MailModule {
};
MailModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                useFactory: async (config) => ({
                    transport: {
                        host: config.get(_configs_1.default.App).mailHost,
                        port: config.get(_configs_1.default.App).mailPort,
                        auth: {
                            user: config.get(_configs_1.default.App).mailUser,
                            pass: config.get(_configs_1.default.App).mailPassword,
                        },
                    },
                    defaults: {
                        from: `"No Reply" <${config.get(_configs_1.default.App).mailUser}>`,
                    },
                    template: {
                        dir: process.cwd() + '/template/',
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        options: {
                            strict: true,
                        },
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [mail_service_1.MailService],
        exports: [mail_service_1.MailService],
    })
], MailModule);
exports.MailModule = MailModule;
