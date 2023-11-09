"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignAnswerToUserDTO = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AssignAnswerToUserDTO {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: [String],
        format: 'answers',
        example: ['answer1', 'answer2'],
    }),
    tslib_1.__metadata("design:type", String)
], AssignAnswerToUserDTO.prototype, "answers", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'tags',
        example: 'configTestUuid',
    }),
    tslib_1.__metadata("design:type", String)
], AssignAnswerToUserDTO.prototype, "configTestUuid", void 0);
exports.AssignAnswerToUserDTO = AssignAnswerToUserDTO;
