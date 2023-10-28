"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileDTO = exports.UpdateAvatarDTO = exports.VerifyDTO = exports.LoginDTO = exports.SignupDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const swagger_utils_1 = require("../../../../utils/swagger-utils");
const gender = {
    Male: 0,
    Female: 1,
};
class SignupDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { phone: { required: true, type: () => String, maxLength: 11 }, firstname: { required: true, type: () => String }, lastname: { required: true, type: () => String }, gender: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(11),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], SignupDTO.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], SignupDTO.prototype, "firstname", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], SignupDTO.prototype, "lastname", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        enum: gender,
        description: (0, swagger_utils_1.createEnumDescription)(gender),
    }),
    tslib_1.__metadata("design:type", Number)
], SignupDTO.prototype, "gender", void 0);
exports.SignupDTO = SignupDTO;
class LoginDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { phone: { required: true, type: () => String, maxLength: 11 } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(11),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], LoginDTO.prototype, "phone", void 0);
exports.LoginDTO = LoginDTO;
class VerifyDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { phone: { required: true, type: () => String, maxLength: 11 }, verification_code: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(11),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], VerifyDTO.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], VerifyDTO.prototype, "verification_code", void 0);
exports.VerifyDTO = VerifyDTO;
class UpdateAvatarDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { input: { required: true, type: () => Object } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", Object)
], UpdateAvatarDTO.prototype, "input", void 0);
exports.UpdateAvatarDTO = UpdateAvatarDTO;
class UpdateProfileDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, firstname: { required: true, type: () => String }, lastname: { required: true, type: () => String }, gender: { required: true, type: () => Number }, email: { required: true, type: () => String, nullable: true }, phone: { required: true, type: () => String, maxLength: 11 } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateProfileDTO.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateProfileDTO.prototype, "firstname", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", String)
], UpdateProfileDTO.prototype, "lastname", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        enum: gender,
        description: (0, swagger_utils_1.createEnumDescription)(gender),
    }),
    tslib_1.__metadata("design:type", Number)
], UpdateProfileDTO.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileDTO.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(11),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateProfileDTO.prototype, "phone", void 0);
exports.UpdateProfileDTO = UpdateProfileDTO;
