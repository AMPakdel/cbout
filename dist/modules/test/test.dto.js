"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTestDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const test_entity_1 = require("../../entities/test.entity");
class CreateTestDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, type: { required: true, type: () => String, enum: require("../../entities/test.entity").Type }, description: { required: true, type: () => String }, shuffleQuestions: { required: true, type: () => Boolean }, shuffleChoices: { required: true, type: () => Boolean }, product_uuid: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Sample Title' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateTestDTO.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: test_entity_1.Type.MultipleChoice }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(test_entity_1.Type),
    tslib_1.__metadata("design:type", String)
], CreateTestDTO.prototype, "type", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Sample Description' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTestDTO.prototype, "description", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateTestDTO.prototype, "shuffleQuestions", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateTestDTO.prototype, "shuffleChoices", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'product-uuid' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTestDTO.prototype, "product_uuid", void 0);
exports.CreateTestDTO = CreateTestDTO;
