"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const mime_types_1 = tslib_1.__importDefault(require("mime-types"));
const fs = tslib_1.__importStar(require("fs"));
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("../../modules/user/user.service");
const list_user_response_1 = require("./responses/list-user.response");
const user_entity_1 = require("../../entities/user.entity");
const role_entity_1 = require("../../entities/role.entity");
const platform_express_1 = require("@nestjs/platform-express");
const updateProfile_dto_1 = require("../../modules/auth/dtos/updateProfile.dto");
const jwt_get_payload_guard_1 = require("../../modules/auth/guards/jwt-get-payload.guard");
const fs_1 = require("fs");
const path_1 = require("path");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAllUsers(req, body) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            const { search, sort, filter, page = 1, pageSize = 20 } = body;
            return await this.userService.getAllUsers(search, sort, filter, page, pageSize);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async getAllRoles(req) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.userService.getAllRoles();
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async getUser({ uuid }, req) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.userService.getUser(uuid);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async getFile(PhotoName, res) {
        const PhotoPath = (0, path_1.join)(process.cwd(), 'uploads/profile/', PhotoName);
        if (!fs.existsSync(PhotoPath)) {
            throw new common_1.NotFoundException('Photo not found');
        }
        const fileStream = (0, fs_1.createReadStream)(PhotoPath);
        const file_mime = mime_types_1.default.lookup(PhotoName);
        if (file_mime) {
            res.contentType(file_mime);
        }
        res.set({
            'Content-Disposition': 'inline',
        });
        return new common_1.StreamableFile(fileStream);
    }
    async updateUser(req, dto, profilePhoto) {
        if (profilePhoto) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(profilePhoto)) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        const updatedUser = await this.userService.updateProfile(req.payload.uuid, dto, profilePhoto);
        const { password } = updatedUser, response = tslib_1.__rest(updatedUser, ["password"]);
        return response;
    }
    async updateUserAdminSide({ uuid }, req, dto, profilePhoto) {
        const userRole = req.payload.role;
        if (profilePhoto) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(profilePhoto)) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (userRole === user_entity_1.Role.Admin) {
            return await this.userService.updateProfileAdminSide(uuid, dto, profilePhoto);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async updateUserRoles({ uuid }, req, roleUUIDs) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.userService.updateUserRoles(uuid, roleUUIDs);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users admin side' }),
    (0, decorator_1.ApiCrudQueries)(),
    (0, decorator_1.ApiStandardListResponse)({ type: list_user_response_1.AdminListUser }),
    openapi.ApiResponse({ status: 201, type: [Object] }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
tslib_1.__decorate([
    (0, common_1.Get)('roles'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all roles' }),
    (0, decorator_1.ApiStandardListResponse)({ type: role_entity_1.Role }),
    openapi.ApiResponse({ status: 200, type: [require("../../entities/role.entity").Role] }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getAllRoles", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a user admin side' }),
    (0, decorator_1.ApiCrudQueries)(),
    (0, decorator_1.ApiStandardListResponse)({ type: list_user_response_1.AdminListUser }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
tslib_1.__decorate([
    (0, common_1.Get)('file/:PhotoName'),
    (0, swagger_1.ApiOperation)({ summary: 'Download a file' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Param)('PhotoName')),
    tslib_1.__param(1, (0, common_1.Res)({ passthrough: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getFile", null);
tslib_1.__decorate([
    (0, common_1.Patch)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update user profile' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED }),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profilePhoto')),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.UploadedFile)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, updateProfile_dto_1.UpdateUserProfileDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
tslib_1.__decorate([
    (0, common_1.Patch)('admin/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update user profile admin side' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profilePhoto')),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__param(3, (0, common_1.UploadedFile)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, updateProfile_dto_1.UpdateUserProfileAdminSideDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserAdminSide", null);
tslib_1.__decorate([
    (0, common_1.Patch)('admin/updateRoles/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update user roles' }),
    (0, decorator_1.ApiStandardResponse)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, Array]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserRoles", null);
UsersController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)({ path: '/user/profile', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], UsersController);
exports.UsersController = UsersController;
