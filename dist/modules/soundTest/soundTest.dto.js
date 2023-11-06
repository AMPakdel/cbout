"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitAnswerDto = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SubmitAnswerDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { soundTestId: { required: true, type: () => String }, answer: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], SubmitAnswerDto.prototype, "soundTestId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], SubmitAnswerDto.prototype, "answer", void 0);
exports.SubmitAnswerDto = SubmitAnswerDto;
