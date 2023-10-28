"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishExamDTO = exports.StartExamDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class StartExamDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { exam_id: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], StartExamDTO.prototype, "exam_id", void 0);
exports.StartExamDTO = StartExamDTO;
class FinishExamDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { exam_id: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], FinishExamDTO.prototype, "exam_id", void 0);
exports.FinishExamDTO = FinishExamDTO;
