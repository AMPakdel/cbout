"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeitnerUpgradeBugFixDTO = exports.DeleteDTO = exports.UpdateLeitnersDTO = exports.AddtoLeitnerDTO = exports.AddSpecificVocabToLeitnerDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const swagger_utils_1 = require("../../../../utils/swagger-utils");
class AddSpecificVocabToLeitnerDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { vocab_id: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], AddSpecificVocabToLeitnerDTO.prototype, "vocab_id", void 0);
exports.AddSpecificVocabToLeitnerDTO = AddSpecificVocabToLeitnerDTO;
class AddtoLeitnerDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { front: { required: true, type: () => String }, back: { required: true, type: () => String }, isVocab: { required: true, type: () => Boolean }, imageUrl: { required: true, type: () => String, nullable: true }, voiceUrl: { required: true, type: () => String, nullable: true } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], AddtoLeitnerDTO.prototype, "front", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], AddtoLeitnerDTO.prototype, "back", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], AddtoLeitnerDTO.prototype, "isVocab", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    tslib_1.__metadata("design:type", Object)
], AddtoLeitnerDTO.prototype, "imageUrl", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    tslib_1.__metadata("design:type", Object)
], AddtoLeitnerDTO.prototype, "voiceUrl", void 0);
exports.AddtoLeitnerDTO = AddtoLeitnerDTO;
const UpdateLeitnerItemBox = {
    Box1: 0,
    Box2: 1,
    Box3: 2,
    Box4: 3,
    Box5: 4,
    Learned: 5,
};
class UpdateLeitnerItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { leitnerId: { required: true, type: () => Number }, box: { required: true, type: () => Number }, isDoneToday: { required: true, type: () => Boolean } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], UpdateLeitnerItem.prototype, "leitnerId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        enum: UpdateLeitnerItemBox,
        description: (0, swagger_utils_1.createEnumDescription)(UpdateLeitnerItemBox),
    }),
    tslib_1.__metadata("design:type", Number)
], UpdateLeitnerItem.prototype, "box", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], UpdateLeitnerItem.prototype, "isDoneToday", void 0);
class UpdateLeitnersDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { isVocab: { required: true, type: () => Boolean }, items: { required: true, type: () => [UpdateLeitnerItem], nullable: true } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], UpdateLeitnersDTO.prototype, "isVocab", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        type: 'array',
        items: {
            type: 'object',
            properties: {
                leitnerId: { type: 'number' },
                box: { type: 'number' },
                isDoneToday: { type: 'boolean' },
            },
        },
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Object)
], UpdateLeitnersDTO.prototype, "items", void 0);
exports.UpdateLeitnersDTO = UpdateLeitnersDTO;
class DeleteDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], DeleteDTO.prototype, "id", void 0);
exports.DeleteDTO = DeleteDTO;
class LeitnerUpgradeBugFixDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { page: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], LeitnerUpgradeBugFixDTO.prototype, "page", void 0);
exports.LeitnerUpgradeBugFixDTO = LeitnerUpgradeBugFixDTO;
