"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_service_1 = require("../../modules/role/role.service");
const create_role_dto_1 = require("./dtos/create-role.dto");
const list_user_response_1 = require("./responses/list-user.response");
let RolesController = class RolesController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async getAllRoles(req) {
        return this.roleService.getAll(req);
    }
    async getRole({ uuid }) {
        return this.roleService.findOne({
            select: ['uuid', 'title'],
            where: { uuid },
        });
    }
    async createRole(dto) {
        return this.roleService.createRole(dto);
    }
    async updateRole(dto, rto) {
        return this.roleService.update(Object.assign(Object.assign({}, dto), rto));
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all roles and roles' }),
    (0, decorator_1.ApiCrudQueries)(),
    (0, decorator_1.ApiStandardListResponse)({ type: list_user_response_1.Role }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, crud_1.ParsedRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RolesController.prototype, "getAllRoles", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get role' }),
    (0, decorator_1.ApiCrudQueries)(),
    (0, decorator_1.ApiStandardListResponse)({ type: list_user_response_1.Role }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], RolesController.prototype, "getRole", null);
tslib_1.__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Create an role' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED }),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [create_role_dto_1.CreateRoleDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesController.prototype, "createRole", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':uuid'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an role ' }),
    (0, decorator_1.ApiStandardResponse)(),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [create_role_dto_1.CreateRoleDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesController.prototype, "updateRole", null);
RolesController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Roles'),
    (0, common_1.Controller)({ path: '/roles', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [role_service_1.RoleService])
], RolesController);
exports.RolesController = RolesController;
