"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerToConversationQuestionDTO = exports.AnswerToMultiChoiceQuestionDTO = exports.AnswerToPhraseQuestionDTO = exports.AnswerToYNBQuestionDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const swagger_utils_1 = require("../../../../utils/swagger-utils");
const answeringType = {
    Learning: 0,
    SessionPart: 1,
    Extra: 2,
    Exam: 3,
    Bookmark: 4,
};
class YNBContentAnswerDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, options: { required: true, type: () => [String] } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], YNBContentAnswerDTO.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ type: (Array) }),
    tslib_1.__metadata("design:type", Array)
], YNBContentAnswerDTO.prototype, "options", void 0);
class AnswerToYNBQuestionDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { questionId: { required: true, type: () => Number }, answers: { required: true }, answeringType: { required: true, type: () => Number }, typeId: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AnswerToYNBQuestionDTO.prototype, "questionId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ type: [YNBContentAnswerDTO] }),
    tslib_1.__metadata("design:type", Array)
], AnswerToYNBQuestionDTO.prototype, "answers", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        enum: answeringType,
        description: (0, swagger_utils_1.createEnumDescription)(answeringType),
    }),
    tslib_1.__metadata("design:type", Number)
], AnswerToYNBQuestionDTO.prototype, "answeringType", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AnswerToYNBQuestionDTO.prototype, "typeId", void 0);
exports.AnswerToYNBQuestionDTO = AnswerToYNBQuestionDTO;
class AnswerToPhraseQuestionDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { questionId: { required: true, type: () => Number }, phrase: { required: true }, answeringType: { required: true, type: () => Number }, typeId: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AnswerToPhraseQuestionDTO.prototype, "questionId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ type: [String] }),
    tslib_1.__metadata("design:type", Array)
], AnswerToPhraseQuestionDTO.prototype, "phrase", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        enum: answeringType,
        description: (0, swagger_utils_1.createEnumDescription)(answeringType),
    }),
    tslib_1.__metadata("design:type", Number)
], AnswerToPhraseQuestionDTO.prototype, "answeringType", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AnswerToPhraseQuestionDTO.prototype, "typeId", void 0);
exports.AnswerToPhraseQuestionDTO = AnswerToPhraseQuestionDTO;
class AnswerToMultiChoiceQuestionDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { questionId: { required: true, type: () => Number }, answers: { required: true }, answeringType: { required: true, type: () => Number }, typeId: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AnswerToMultiChoiceQuestionDTO.prototype, "questionId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ type: [Number] }),
    tslib_1.__metadata("design:type", Array)
], AnswerToMultiChoiceQuestionDTO.prototype, "answers", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        enum: answeringType,
        description: (0, swagger_utils_1.createEnumDescription)(answeringType),
    }),
    tslib_1.__metadata("design:type", Number)
], AnswerToMultiChoiceQuestionDTO.prototype, "answeringType", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AnswerToMultiChoiceQuestionDTO.prototype, "typeId", void 0);
exports.AnswerToMultiChoiceQuestionDTO = AnswerToMultiChoiceQuestionDTO;
class ConversationAnswerDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, options: { required: true, type: () => [String] } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], ConversationAnswerDTO.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ type: (Array) }),
    tslib_1.__metadata("design:type", Array)
], ConversationAnswerDTO.prototype, "options", void 0);
class AnswerToConversationQuestionDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { questionId: { required: true, type: () => Number }, answers: { required: true }, answeringType: { required: true, type: () => Number }, typeId: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AnswerToConversationQuestionDTO.prototype, "questionId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ type: [ConversationAnswerDTO] }),
    tslib_1.__metadata("design:type", Array)
], AnswerToConversationQuestionDTO.prototype, "answers", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        enum: answeringType,
        description: (0, swagger_utils_1.createEnumDescription)(answeringType),
    }),
    tslib_1.__metadata("design:type", Number)
], AnswerToConversationQuestionDTO.prototype, "answeringType", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AnswerToConversationQuestionDTO.prototype, "typeId", void 0);
exports.AnswerToConversationQuestionDTO = AnswerToConversationQuestionDTO;
