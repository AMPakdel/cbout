"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteExtraDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const swagger_utils_1 = require("../../../../utils/swagger-utils");
const ExtraType = {
    AudioStory: 0,
    MusicVideo: 1,
    Podcast: 2,
    EducationalVideo: 3,
    VideoClip: 4,
    Magazine: 5,
    PhotoDictionary: 6,
    CrossWord: 7,
};
class CompleteExtraDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, extraType: { required: true, type: () => Number }, percent: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], CompleteExtraDTO.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        enum: ExtraType,
        description: (0, swagger_utils_1.createEnumDescription)(ExtraType),
    }),
    tslib_1.__metadata("design:type", Number)
], CompleteExtraDTO.prototype, "extraType", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], CompleteExtraDTO.prototype, "percent", void 0);
exports.CompleteExtraDTO = CompleteExtraDTO;
