"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateRoleDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'title', example: 'admin' }),
    tslib_1.__metadata("design:type", String)
], CreateRoleDTO.prototype, "title", void 0);
exports.CreateRoleDTO = CreateRoleDTO;
