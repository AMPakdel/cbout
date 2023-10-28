"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateAdminUserDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class AdminCreateAdminUserDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, password: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ format: 'email', example: 'todo@example.com' }),
    tslib_1.__metadata("design:type", String)
], AdminCreateAdminUserDTO.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'password', example: '123456' }),
    tslib_1.__metadata("design:type", String)
], AdminCreateAdminUserDTO.prototype, "password", void 0);
exports.AdminCreateAdminUserDTO = AdminCreateAdminUserDTO;
