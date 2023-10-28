"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiLocale = exports.Locale = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_constant_1 = require("../app/app.constant");
function Locale() {
    return (0, common_1.createParamDecorator)((_, ctx) => {
        const { locale } = ctx.switchToHttp().getRequest().query;
        switch (locale) {
            default:
                return app_constant_1.LocaleCode.English;
            case app_constant_1.LocaleCode.English:
            case app_constant_1.LocaleCode.Vietnamese:
            case app_constant_1.LocaleCode.SimplifiedChinese:
            case app_constant_1.LocaleCode.TraditionalChinese:
                return locale;
        }
    })();
}
exports.Locale = Locale;
function ApiLocale() {
    return (...params) => {
        (0, swagger_1.ApiQuery)({ name: 'locale', example: 'en-US' })(...params);
    };
}
exports.ApiLocale = ApiLocale;
