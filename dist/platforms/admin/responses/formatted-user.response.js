"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminFormattedUser = exports.AdminFormattedUserTodo = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../../entities/user.entity");
class AdminFormattedUserTodo {
    static _OPENAPI_METADATA_FACTORY() {
        return { createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, uuid: { required: true, type: () => String }, message: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Date)
], AdminFormattedUserTodo.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Date)
], AdminFormattedUserTodo.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'uuid' }),
    tslib_1.__metadata("design:type", String)
], AdminFormattedUserTodo.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], AdminFormattedUserTodo.prototype, "message", void 0);
exports.AdminFormattedUserTodo = AdminFormattedUserTodo;
class AdminFormattedUser {
    static _OPENAPI_METADATA_FACTORY() {
        return { createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, uuid: { required: true, type: () => String }, status: { required: true, enum: require("../../../entities/user.entity").UserStatus }, role: { required: true, enum: require("../../../entities/user.entity").Role }, email: { required: true, type: () => String }, todos: { required: true, type: () => [require("./formatted-user.response").AdminFormattedUserTodo] } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Date)
], AdminFormattedUser.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Date)
], AdminFormattedUser.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'uuid' }),
    tslib_1.__metadata("design:type", String)
], AdminFormattedUser.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], AdminFormattedUser.prototype, "status", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], AdminFormattedUser.prototype, "role", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ format: 'email' }),
    tslib_1.__metadata("design:type", String)
], AdminFormattedUser.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Array)
], AdminFormattedUser.prototype, "todos", void 0);
exports.AdminFormattedUser = AdminFormattedUser;
