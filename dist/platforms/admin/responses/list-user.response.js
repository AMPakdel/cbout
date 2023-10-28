"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminListInstitute = exports.AdminListUser = exports.Role = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../../entities/user.entity");
const institute_entity_1 = require("../../../entities/institute.entity");
class Role {
    static _OPENAPI_METADATA_FACTORY() {
        return { createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, uuid: { required: true, type: () => String }, title: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Date)
], Role.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Date)
], Role.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'uuid' }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "title", void 0);
exports.Role = Role;
class AdminListUser {
    static _OPENAPI_METADATA_FACTORY() {
        return { createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, uuid: { required: true, type: () => String }, status: { required: true, enum: require("../../../entities/user.entity").UserStatus }, roles: { required: true, type: () => [require("./list-user.response").Role] }, email: { required: true, type: () => String }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, nationalCode: { required: true, type: () => String }, mobile: { required: true, type: () => String }, photoURL: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Date)
], AdminListUser.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Date)
], AdminListUser.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'uuid' }),
    tslib_1.__metadata("design:type", String)
], AdminListUser.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], AdminListUser.prototype, "status", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Array)
], AdminListUser.prototype, "roles", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'email' }),
    tslib_1.__metadata("design:type", String)
], AdminListUser.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'firstName' }),
    tslib_1.__metadata("design:type", String)
], AdminListUser.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'lastName' }),
    tslib_1.__metadata("design:type", String)
], AdminListUser.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'nationalCode' }),
    tslib_1.__metadata("design:type", String)
], AdminListUser.prototype, "nationalCode", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'mobile' }),
    tslib_1.__metadata("design:type", String)
], AdminListUser.prototype, "mobile", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'photoURL' }),
    tslib_1.__metadata("design:type", String)
], AdminListUser.prototype, "photoURL", void 0);
exports.AdminListUser = AdminListUser;
class AdminListInstitute {
    static _OPENAPI_METADATA_FACTORY() {
        return { createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, uuid: { required: true, type: () => String }, status: { required: true, enum: require("../../../entities/institute.entity").InstituteStatus }, roles: { required: true, type: () => [require("./list-user.response").Role] }, email: { required: true, type: () => String }, username: { required: true, type: () => String }, instituteName: { required: true, type: () => String }, province_id: { required: true, type: () => Number }, phoneNumber: { required: true, type: () => String }, address: { required: true, type: () => String }, website: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Date)
], AdminListInstitute.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Date)
], AdminListInstitute.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'uuid' }),
    tslib_1.__metadata("design:type", String)
], AdminListInstitute.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], AdminListInstitute.prototype, "status", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Array)
], AdminListInstitute.prototype, "roles", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'email' }),
    tslib_1.__metadata("design:type", String)
], AdminListInstitute.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'username' }),
    tslib_1.__metadata("design:type", String)
], AdminListInstitute.prototype, "username", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'instituteName' }),
    tslib_1.__metadata("design:type", String)
], AdminListInstitute.prototype, "instituteName", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'province_id' }),
    tslib_1.__metadata("design:type", Number)
], AdminListInstitute.prototype, "province_id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'phoneNumber' }),
    tslib_1.__metadata("design:type", String)
], AdminListInstitute.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'phoneNumber' }),
    tslib_1.__metadata("design:type", String)
], AdminListInstitute.prototype, "address", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'phoneNumber' }),
    tslib_1.__metadata("design:type", String)
], AdminListInstitute.prototype, "website", void 0);
exports.AdminListInstitute = AdminListInstitute;
