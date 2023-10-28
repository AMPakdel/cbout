"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearnestValidationExeption = exports.LearnestUnexpectedResponseExeption = exports.LearnestNotFoundExeption = exports.LearnestServiceErrorExeption = exports.LearnestBaseExeption = void 0;
const common_1 = require("@nestjs/common");
class LearnestBaseExeptionResponse {
}
class LearnestBaseExeption extends common_1.HttpException {
    constructor(response) {
        super(response, 200);
        this._res = response;
    }
    getResponse() {
        return {
            code: this._res.code || -1,
            message: this._res.message || 'Item Not Found!',
            errors: this._res.errors || [],
            data: this._res.data || null,
        };
    }
}
exports.LearnestBaseExeption = LearnestBaseExeption;
class LearnestServiceErrorExeption extends LearnestBaseExeption {
    constructor(response) {
        var _a, _b;
        super({
            errors: (_a = response.response) === null || _a === void 0 ? void 0 : _a.errors,
            data: (_b = response.response) === null || _b === void 0 ? void 0 : _b.data,
        });
        this._res.message =
            this._res.message || 'خطا در دریافت اطلاعات از سرویس لرنست';
    }
}
exports.LearnestServiceErrorExeption = LearnestServiceErrorExeption;
class LearnestNotFoundExeption extends LearnestBaseExeption {
    constructor(response) {
        var _a, _b;
        super({
            errors: (_a = response.response) === null || _a === void 0 ? void 0 : _a.errors,
            data: (_b = response.response) === null || _b === void 0 ? void 0 : _b.data,
        });
        this._res.message =
            this._res.message || 'آیتم درخواستی از سرویس لرنست پیدا نشد.';
    }
}
exports.LearnestNotFoundExeption = LearnestNotFoundExeption;
class LearnestUnexpectedResponseExeption extends LearnestBaseExeption {
    constructor(response) {
        var _a, _b;
        super({
            errors: (_a = response.response) === null || _a === void 0 ? void 0 : _a.errors,
            data: (_b = response.response) === null || _b === void 0 ? void 0 : _b.data,
        });
        this._res.message =
            this._res.message || 'خطا در ساختار پاسخ دریافتی از سرویس لرنست.';
    }
}
exports.LearnestUnexpectedResponseExeption = LearnestUnexpectedResponseExeption;
class LearnestValidationExeption extends LearnestBaseExeption {
    constructor(response) {
        var _a, _b;
        super({
            errors: (_a = response.response) === null || _a === void 0 ? void 0 : _a.errors,
            data: (_b = response.response) === null || _b === void 0 ? void 0 : _b.data,
        });
        this._res.message =
            this._res.message || 'داده های ارسالی به سرویس لرنست نامعتبر می باشند.';
    }
}
exports.LearnestValidationExeption = LearnestValidationExeption;
