"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class LogInDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String }, password: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'username', example: '0912xxxxxxx' }),
    tslib_1.__metadata("design:type", String)
], LogInDTO.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'password', example: '123456' }),
    tslib_1.__metadata("design:type", String)
], LogInDTO.prototype, "password", void 0);
exports.LogInDTO = LogInDTO;
