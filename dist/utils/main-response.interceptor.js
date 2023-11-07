"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainResponseInterceptor = exports.MainResponseInterceptorWhiteList = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
exports.MainResponseInterceptorWhiteList = [
    '/api/v1/file',
    '/api/v1/ticketing/file',
    '/api/v1/user/profile/file',
    '/api/v1/user/publications/file',
    '/api/v1/soundTest/file',
    '/api/v1/educator/file',
    '/api/v1/course/file',
    '/api/v1/payment-portal/portal-redirect',
];
let MainResponseInterceptor = class MainResponseInterceptor {
    intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        let is_in_whiteList = false;
        exports.MainResponseInterceptorWhiteList.forEach((w) => {
            if (req.path.startsWith(w)) {
                is_in_whiteList = true;
            }
        });
        if (is_in_whiteList) {
            return next.handle();
        }
        else {
            return next.handle().pipe((0, operators_1.map)((data) => {
                if (Array.isArray(data)) {
                    return { code: 0, message: '', data: { data, total: data.length } };
                }
                else {
                    return { code: 0, message: '', data };
                }
            }));
        }
    }
};
MainResponseInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)()
], MainResponseInterceptor);
exports.MainResponseInterceptor = MainResponseInterceptor;
