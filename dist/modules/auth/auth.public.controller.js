"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthPublicController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const register_dto_1 = require("./dtos/register.dto");
const jwt_get_payload_guard_1 = require("./guards/jwt-get-payload.guard");
const jwt_get_user_guard_1 = require("./guards/jwt-get-user.guard");
let AuthPublicController = class AuthPublicController {
    constructor(service) {
        this.service = service;
    }
    test(req) {
        return req.payload;
    }
    test2(req) {
        return req.user;
    }
    async userLoginWithCode(dto) {
        return this.service.userLoginWithCode(dto);
    }
    async checkVerificationCode(dto) {
        return this.service.checkVerificationCode(dto.phoneNumber, dto.code);
    }
    async register(dto) {
        return this.service.registerUser(dto);
    }
    async instituteLoginWithCode(dto) {
        return this.service.userLoginWithCode(dto);
    }
    async instituteCheckVerificationCode(dto) {
        return this.service.instituteCheckVerificationCode(dto.phoneNumber, dto.code);
    }
    async registerInstitute(dto) {
        return this.service.registerInstitute(dto);
    }
    async verifyToken(req) {
        const { authorization } = req.headers;
        if (!authorization || authorization.trim() === '') {
            throw new common_1.UnauthorizedException('Please provide token');
        }
        const authToken = authorization.replace(/bearer/gim, '').trim();
        return {
            token: authToken,
            refreshToken: authToken,
            user: req.user,
        };
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/JwtPayloadGuard'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AuthPublicController.prototype, "test", null);
tslib_1.__decorate([
    (0, common_1.Get)('/JwtGetUserGuard'),
    (0, common_1.UseGuards)(jwt_get_user_guard_1.JwtGetUserGuard),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AuthPublicController.prototype, "test2", null);
tslib_1.__decorate([
    (0, common_1.Post)('user/login-with-code'),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthPublicController.prototype, "userLoginWithCode", null);
tslib_1.__decorate([
    (0, common_1.Post)('user/check-verification-code'),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthPublicController.prototype, "checkVerificationCode", null);
tslib_1.__decorate([
    (0, common_1.Post)('user/register'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthPublicController.prototype, "register", null);
tslib_1.__decorate([
    (0, common_1.Post)('institute/login-with-code'),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthPublicController.prototype, "instituteLoginWithCode", null);
tslib_1.__decorate([
    (0, common_1.Post)('institute/check-verification-code'),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthPublicController.prototype, "instituteCheckVerificationCode", null);
tslib_1.__decorate([
    (0, common_1.Post)('institute/register'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [register_dto_1.InstituteRegisterDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthPublicController.prototype, "registerInstitute", null);
tslib_1.__decorate([
    (0, common_1.Get)('user/verify-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Validatation token' }),
    (0, common_1.UseGuards)(jwt_get_user_guard_1.JwtGetUserGuard),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthPublicController.prototype, "verifyToken", null);
AuthPublicController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)({ path: 'auth', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthPublicController);
exports.AuthPublicController = AuthPublicController;
