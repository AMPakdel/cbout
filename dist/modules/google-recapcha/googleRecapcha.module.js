"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const google_recaptcha_1 = require("@nestlab/google-recaptcha");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            google_recaptcha_1.GoogleRecaptchaModule.forRoot({
                secretKey: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
                response: (req) => (req.headers.recaptcha || '').toString(),
                skipIf: process.env.NODE_ENV !== 'production',
                actions: ['SignUp', 'SignIn'],
                score: 0.8,
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
