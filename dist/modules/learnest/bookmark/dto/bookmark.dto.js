"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteQuestionDTO = exports.AddQuestionDTO = exports.DeleteBookmarkDTO = exports.CreateBookmarkDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const swagger_utils_1 = require("../../../../utils/swagger-utils");
class CreateBookmarkDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], CreateBookmarkDTO.prototype, "name", void 0);
exports.CreateBookmarkDTO = CreateBookmarkDTO;
class DeleteBookmarkDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { bookmark_id: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], DeleteBookmarkDTO.prototype, "bookmark_id", void 0);
exports.DeleteBookmarkDTO = DeleteBookmarkDTO;
const question_type = {
    YNB: 0,
    Conversation: 1,
    Passage: 2,
    MultiChoice: 3,
    Phrase: 4,
};
class AddQuestionDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { bookmark_id: { required: true, type: () => Number }, title: { required: true, type: () => String }, question_id: { required: true, type: () => Number }, question_type: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AddQuestionDTO.prototype, "bookmark_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], AddQuestionDTO.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AddQuestionDTO.prototype, "question_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        enum: question_type,
        description: (0, swagger_utils_1.createEnumDescription)(question_type),
    }),
    tslib_1.__metadata("design:type", Number)
], AddQuestionDTO.prototype, "question_type", void 0);
exports.AddQuestionDTO = AddQuestionDTO;
class DeleteQuestionDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { question_id: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], DeleteQuestionDTO.prototype, "question_id", void 0);
exports.DeleteQuestionDTO = DeleteQuestionDTO;
