"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseExceptionFilter = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const api_exeption_1 = require("../modules/learnest/api/api.exeption");
var FilteredMessage;
(function (FilteredMessage) {
    FilteredMessage["ValidationError"] = "Validation error, please check the request parameters";
    FilteredMessage["AuthorizationError"] = "Authorization error, please provide a valid token";
    FilteredMessage["PermissionError"] = "Permission error, please check that you have the correct permissions";
    FilteredMessage["ItemNotFoundError"] = "Item not found error";
    FilteredMessage["InternalServerError"] = "Internal server error, please contact the developers";
})(FilteredMessage || (FilteredMessage = {}));
let BaseExceptionFilter = class BaseExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = common_1.HttpStatus.BAD_REQUEST;
        if (exception instanceof api_exeption_1.LearnestBaseExeption) {
            status = exception.getStatus();
            response.status(status).json(exception.getResponse());
            return;
        }
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            if (status === 400) {
                let errors = [];
                if (exception.getResponse() && exception.getResponse().message) {
                    errors = exception.getResponse().message;
                }
                response.status(status).json({
                    code: -4,
                    message: "پارامتر های ورودی نامعتبر است",
                    errors,
                    data: null,
                });
                return;
            }
            response.status(status).json(exception.getResponse());
            return;
        }
        response.status(status).json({
            code: -1,
            message: FilteredMessage.InternalServerError,
            errors: [],
            data: null,
        });
    }
};
BaseExceptionFilter = tslib_1.__decorate([
    (0, common_1.Catch)()
], BaseExceptionFilter);
exports.BaseExceptionFilter = BaseExceptionFilter;
