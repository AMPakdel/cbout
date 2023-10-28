"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstituteController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const institute_service_1 = require("./institute.service");
const list_user_response_1 = require("../../platforms/admin/responses/list-user.response");
const user_entity_1 = require("../../entities/user.entity");
const platform_express_1 = require("@nestjs/platform-express");
const register_dto_1 = require("../auth/dtos/register.dto");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
let InstituteController = class InstituteController {
    constructor(instituteService) {
        this.instituteService = instituteService;
    }
    async getAllInstitutes(req, body) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            const { search, sort, filter, page = 1, pageSize = 20 } = body;
            return await this.instituteService.getAllInstitutes(search, sort, filter, page, pageSize);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async getInstitute({ uuid }, req) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.instituteService.getInstitute(uuid);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async updateProfile(req, dto) {
        const updatedUser = await this.instituteService.updateProfile(req.payload.uuid, dto);
        const { password } = updatedUser, response = tslib_1.__rest(updatedUser, ["password"]);
        return response;
    }
    async updateProfileAdminSide({ uuid }, req, dto) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return await this.instituteService.updateProfileAdminSide(uuid, dto);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async updateUserStatus({ uuid }, req, dto) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.instituteService.updateInstituteStatus(uuid, dto);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async assignPublicationToInstitute({ uuid }, req, dto) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.instituteService.assignPublicationToInstitute(uuid, dto.publicationUuid);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Institute admin side' }),
    (0, decorator_1.ApiCrudQueries)(),
    (0, decorator_1.ApiStandardListResponse)({ type: list_user_response_1.AdminListInstitute }),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InstituteController.prototype, "getAllInstitutes", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get an institute admin side' }),
    (0, decorator_1.ApiCrudQueries)(),
    (0, decorator_1.ApiStandardListResponse)({ type: list_user_response_1.AdminListInstitute }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InstituteController.prototype, "getInstitute", null);
tslib_1.__decorate([
    (0, common_1.Patch)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update institute profile' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED }),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, register_dto_1.InstituteRegisterDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], InstituteController.prototype, "updateProfile", null);
tslib_1.__decorate([
    (0, common_1.Patch)('admin/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update institute profile admin side' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profilePhoto')),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, register_dto_1.UpdateInstituteDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], InstituteController.prototype, "updateProfileAdminSide", null);
tslib_1.__decorate([
    (0, common_1.Patch)('admin/updateStatus/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update institute status' }),
    (0, decorator_1.ApiStandardResponse)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, register_dto_1.UpdateStatusDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], InstituteController.prototype, "updateUserStatus", null);
tslib_1.__decorate([
    (0, common_1.Patch)('admin/assignPublication/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Assign a publication to an InstituteOwner' }),
    (0, decorator_1.ApiStandardResponse)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, register_dto_1.AssignPublicationDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], InstituteController.prototype, "assignPublicationToInstitute", null);
InstituteController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Institute'),
    (0, common_1.Controller)({ path: '/institute/profile', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [institute_service_1.InstituteService])
], InstituteController);
exports.InstituteController = InstituteController;
