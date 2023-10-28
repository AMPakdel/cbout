"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerToCrosswordDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class AnswerToCrosswordDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { crossWordId: { required: true, type: () => Number }, chars: { required: true, type: () => [String], nullable: true } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AnswerToCrosswordDTO.prototype, "crossWordId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: (Array), nullable: true }),
    tslib_1.__metadata("design:type", Object)
], AnswerToCrosswordDTO.prototype, "chars", void 0);
exports.AnswerToCrosswordDTO = AnswerToCrosswordDTO;
