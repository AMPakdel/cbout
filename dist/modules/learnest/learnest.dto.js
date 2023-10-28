"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class ReportDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { description: { required: true, type: () => String }, data: { required: true, type: () => String }, screenshot: { required: true, type: () => Object } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], ReportDTO.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], ReportDTO.prototype, "data", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", Object)
], ReportDTO.prototype, "screenshot", void 0);
exports.ReportDTO = ReportDTO;
