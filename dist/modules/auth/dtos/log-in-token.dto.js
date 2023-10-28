"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInTokenDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class LogInTokenDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { token: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'token', example: 'jwt token' }),
    tslib_1.__metadata("design:type", String)
], LogInTokenDTO.prototype, "token", void 0);
exports.LogInTokenDTO = LogInTokenDTO;
