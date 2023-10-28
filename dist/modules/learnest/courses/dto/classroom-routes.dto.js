"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestedStartDateForCourseDTO = exports.GetQuestionDTO = exports.RejectInviteToClasssroomDTO = exports.DeleteInviteToClasssroomDTO = exports.InviteToClasssroomDTO = exports.InviteToCourseDTO = exports.ClassroomInvitesDTO = exports.ClassroomInvitesSentByUserDTO = exports.CompleteSessionPartDTO = exports.CompleteLearningDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const swagger_utils_1 = require("../../../../utils/swagger-utils");
class CompleteLearningDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { classroomId: { required: true, type: () => Number }, learningId: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], CompleteLearningDTO.prototype, "classroomId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], CompleteLearningDTO.prototype, "learningId", void 0);
exports.CompleteLearningDTO = CompleteLearningDTO;
class CompleteSessionPartDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { classroomId: { required: true, type: () => Number }, sessionPartId: { required: true, type: () => Number }, percent: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], CompleteSessionPartDTO.prototype, "classroomId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], CompleteSessionPartDTO.prototype, "sessionPartId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], CompleteSessionPartDTO.prototype, "percent", void 0);
exports.CompleteSessionPartDTO = CompleteSessionPartDTO;
class ClassroomInvitesSentByUserDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { courseId: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], ClassroomInvitesSentByUserDTO.prototype, "courseId", void 0);
exports.ClassroomInvitesSentByUserDTO = ClassroomInvitesSentByUserDTO;
class ClassroomInvitesDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { courseId: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], ClassroomInvitesDTO.prototype, "courseId", void 0);
exports.ClassroomInvitesDTO = ClassroomInvitesDTO;
class InviteToCourseDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { courseId: { required: true, type: () => Number }, invites: { required: true, type: () => [String], nullable: true } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], InviteToCourseDTO.prototype, "courseId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: (Array), nullable: true }),
    tslib_1.__metadata("design:type", Object)
], InviteToCourseDTO.prototype, "invites", void 0);
exports.InviteToCourseDTO = InviteToCourseDTO;
class InviteToClasssroomDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { classRoomId: { required: true, type: () => Number }, phone: { required: true, type: () => String, nullable: true } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], InviteToClasssroomDTO.prototype, "classRoomId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    tslib_1.__metadata("design:type", Object)
], InviteToClasssroomDTO.prototype, "phone", void 0);
exports.InviteToClasssroomDTO = InviteToClasssroomDTO;
class DeleteInviteToClasssroomDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { inviteCode: { required: true, type: () => Number }, classRoomId: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], DeleteInviteToClasssroomDTO.prototype, "inviteCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], DeleteInviteToClasssroomDTO.prototype, "classRoomId", void 0);
exports.DeleteInviteToClasssroomDTO = DeleteInviteToClasssroomDTO;
class RejectInviteToClasssroomDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { inviteCode: { required: true, type: () => Number }, classRoomId: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], RejectInviteToClasssroomDTO.prototype, "inviteCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], RejectInviteToClasssroomDTO.prototype, "classRoomId", void 0);
exports.RejectInviteToClasssroomDTO = RejectInviteToClasssroomDTO;
const questionType = {
    YNB: 0,
    Conversation: 1,
    Passage: 2,
    MultiChoice: 3,
    Phrase: 4,
};
class GetQuestionDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { questionId: { required: true, type: () => Number }, questionType: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], GetQuestionDTO.prototype, "questionId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number, enum: questionType, description: (0, swagger_utils_1.createEnumDescription)(questionType) }),
    tslib_1.__metadata("design:type", Number)
], GetQuestionDTO.prototype, "questionType", void 0);
exports.GetQuestionDTO = GetQuestionDTO;
class SuggestedStartDateForCourseDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { courseId: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], SuggestedStartDateForCourseDTO.prototype, "courseId", void 0);
exports.SuggestedStartDateForCourseDTO = SuggestedStartDateForCourseDTO;
