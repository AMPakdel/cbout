"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const test_service_1 = require("./test.service");
const test_dto_1 = require("./test.dto");
const test_entity_1 = require("../../entities/test.entity");
const user_entity_1 = require("../../entities/user.entity");
let TestController = class TestController {
    constructor(testService) {
        this.testService = testService;
    }
    async getAllTest(req, request) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.testService.getAllTests(request);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async getTest(req, { uuid }) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.testService.getTest(uuid);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async createTest(req, dto) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.testService.createTest(dto);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async updateTest({ uuid }, req, dto) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.testService.updateTest(uuid, dto);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async deleteTest(uuid, req) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.testService.deleteTest(uuid);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, decorator_1.ApiCrudQueries)(),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tests' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, crud_1.ParsedRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TestController.prototype, "getAllTest", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a test' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], TestController.prototype, "getTest", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a test' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: test_entity_1.Test }),
    openapi.ApiResponse({ status: 201, type: require("../../entities/test.entity").Test }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, test_dto_1.CreateTestDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], TestController.prototype, "createTest", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update a test' }),
    (0, decorator_1.ApiStandardResponse)(),
    openapi.ApiResponse({ status: 200, type: require("../../entities/test.entity").Test }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, test_dto_1.CreateTestDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], TestController.prototype, "updateTest", null);
tslib_1.__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a video' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.NO_CONTENT }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('uuid')),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TestController.prototype, "deleteTest", null);
TestController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Test'),
    (0, common_1.Controller)({ path: '/test', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [test_service_1.TestService])
], TestController);
exports.TestController = TestController;
