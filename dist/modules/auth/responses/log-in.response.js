"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInResponse = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class LogInResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { token: { required: true, type: () => String }, user: { required: false, type: () => Object } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' }),
    tslib_1.__metadata("design:type", String)
], LogInResponse.prototype, "token", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'model' }),
    tslib_1.__metadata("design:type", Object)
], LogInResponse.prototype, "user", void 0);
exports.LogInResponse = LogInResponse;
