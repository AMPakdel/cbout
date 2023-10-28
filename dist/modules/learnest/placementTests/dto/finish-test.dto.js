"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishTestDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class AnswerObj {
    static _OPENAPI_METADATA_FACTORY() {
        return { questionId: { required: true, type: () => Number }, answerId: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AnswerObj.prototype, "questionId", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AnswerObj.prototype, "answerId", void 0);
class FinishTestDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, answers: { required: true, type: () => [AnswerObj] } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], FinishTestDTO.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ type: [AnswerObj] }),
    tslib_1.__metadata("design:type", Array)
], FinishTestDTO.prototype, "answers", void 0);
exports.FinishTestDTO = FinishTestDTO;
