"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTestQuestionDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const test_entity_1 = require("../../entities/test.entity");
class CreateTestQuestionDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { question: { required: true, type: () => String }, type: { required: true, type: () => String, enum: require("../../entities/test.entity").Type }, choiceOne: { required: true, type: () => String }, choiceTwo: { required: true, type: () => String }, choiceThree: { required: true, type: () => String }, choiceFour: { required: true, type: () => String }, trueChoice: { required: true, type: () => String }, picName: { required: true, type: () => String }, test_uuid: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Sample Question' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTestQuestionDTO.prototype, "question", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: test_entity_1.Type.MultipleChoice }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(test_entity_1.Type),
    tslib_1.__metadata("design:type", String)
], CreateTestQuestionDTO.prototype, "type", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Choice 1' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTestQuestionDTO.prototype, "choiceOne", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Choice 2' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTestQuestionDTO.prototype, "choiceTwo", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Choice 3' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTestQuestionDTO.prototype, "choiceThree", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Choice 4' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTestQuestionDTO.prototype, "choiceFour", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Choice 1' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTestQuestionDTO.prototype, "trueChoice", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateTestQuestionDTO.prototype, "picName", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'test-uuid' }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTestQuestionDTO.prototype, "test_uuid", void 0);
exports.CreateTestQuestionDTO = CreateTestQuestionDTO;
