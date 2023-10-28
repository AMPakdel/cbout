"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayCourseFactorDTO = exports.CheckRefferCodeDTO = exports.CheckGiftCodeDTO = exports.BuyCourseDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const swagger_utils_1 = require("../../../../utils/swagger-utils");
class ClassRoomConfig {
    static _OPENAPI_METADATA_FACTORY() {
        return { courseId: { required: true, type: () => Number }, options: { required: true, type: () => [String] } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], ClassRoomConfig.prototype, "courseId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ type: (Array) }),
    tslib_1.__metadata("design:type", Array)
], ClassRoomConfig.prototype, "options", void 0);
const weekDays = {
    SaturdayMonday: 0,
    SaturdayWednesday: 1,
    MondayWednesday: 2,
    SundayTuesday: 3,
    TuesdayThursday: 4,
    SaturdayTuesday: 5,
    SundayThursday: 6,
    MondayThursday: 7,
    SundayFriday: 8,
    MondayFriday: 9,
    TuesdayFriday: 10,
    WednesdayFriday: 11,
    OddDays: 12,
    EvenDays: 13,
    SaturdayToThursday: 14,
    AllDays: 15,
};
class BuyCourseDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { courseId: { required: true, type: () => Number }, giftCode: { required: true, type: () => String, nullable: true }, refferCode: { required: true, type: () => String, nullable: true }, weekDays: { required: true, type: () => Number }, isTemp: { required: true, type: () => Boolean }, classRoomConfig: { required: true, type: () => ClassRoomConfig, nullable: true }, isWithTeacher: { required: true, type: () => Boolean } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], BuyCourseDTO.prototype, "courseId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    tslib_1.__metadata("design:type", Object)
], BuyCourseDTO.prototype, "giftCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    tslib_1.__metadata("design:type", Object)
], BuyCourseDTO.prototype, "refferCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        enum: weekDays,
        description: (0, swagger_utils_1.createEnumDescription)(weekDays),
    }),
    tslib_1.__metadata("design:type", Number)
], BuyCourseDTO.prototype, "weekDays", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], BuyCourseDTO.prototype, "isTemp", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: ClassRoomConfig, nullable: true }),
    tslib_1.__metadata("design:type", Object)
], BuyCourseDTO.prototype, "classRoomConfig", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], BuyCourseDTO.prototype, "isWithTeacher", void 0);
exports.BuyCourseDTO = BuyCourseDTO;
class CheckGiftCodeDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { gift_code: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], CheckGiftCodeDTO.prototype, "gift_code", void 0);
exports.CheckGiftCodeDTO = CheckGiftCodeDTO;
class CheckRefferCodeDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { reffer_code: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], CheckRefferCodeDTO.prototype, "reffer_code", void 0);
exports.CheckRefferCodeDTO = CheckRefferCodeDTO;
class PayCourseFactorDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { factor_id: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], PayCourseFactorDTO.prototype, "factor_id", void 0);
exports.PayCourseFactorDTO = PayCourseFactorDTO;
