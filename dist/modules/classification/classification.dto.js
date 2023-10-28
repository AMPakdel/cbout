"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClassificationDto = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const classification_entity_1 = require("../../entities/classification.entity");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateClassificationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, type: { required: true, enum: require("../../entities/classification.entity").Type }, isActive: { required: true, type: () => Boolean } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: 'Title' }),
    tslib_1.__metadata("design:type", String)
], CreateClassificationDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(classification_entity_1.Type),
    (0, swagger_1.ApiProperty)({ enum: classification_entity_1.Type, example: classification_entity_1.Type.Courses }),
    tslib_1.__metadata("design:type", String)
], CreateClassificationDto.prototype, "type", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: true }),
    tslib_1.__metadata("design:type", Boolean)
], CreateClassificationDto.prototype, "isActive", void 0);
exports.CreateClassificationDto = CreateClassificationDto;
