"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestQuestionController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const testQuestion_service_1 = require("./testQuestion.service");
const testQuestion_dto_1 = require("./testQuestion.dto");
const test_question_entity_1 = require("../../entities/test-question.entity");
const user_entity_1 = require("../../entities/user.entity");
let TestQuestionController = class TestQuestionController {
    constructor(testQuestionService) {
        this.testQuestionService = testQuestionService;
    }
    async getAllTestQuestions(req, request) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.testQuestionService.getAllTestQuestions(request);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async getTestQuestion(req, { uuid }) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.testQuestionService.getTestQuestion(uuid);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async createTestQuestion(req, dto, files) {
        const userRole = req.payload.role;
        if (files.picName && files.picName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.picName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.testQuestionService.createTestQuestion(dto, files.picName && files.picName[0]);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async updateTestQuestion({ uuid }, req, dto, files) {
        const userRole = req.payload.role;
        if (files.picName && files.picName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.picName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.testQuestionService.updateTestQuestion(uuid, dto, files.picName && files.picName[0]);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async deleteTestQuestion(uuid, req) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.testQuestionService.deleteTestQuestion(uuid);
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
    (0, swagger_1.ApiOperation)({ summary: 'Get all testQuestions' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, crud_1.ParsedRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TestQuestionController.prototype, "getAllTestQuestions", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a testQuestion' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], TestQuestionController.prototype, "getTestQuestion", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a testQuestion' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: test_question_entity_1.TestQuestion }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'picName', maxCount: 1 }])),
    openapi.ApiResponse({ status: 201, type: require("../../entities/test-question.entity").TestQuestion }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, testQuestion_dto_1.CreateTestQuestionDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TestQuestionController.prototype, "createTestQuestion", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update a testQuestion' }),
    (0, decorator_1.ApiStandardResponse)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'picName', maxCount: 1 }])),
    openapi.ApiResponse({ status: 200, type: require("../../entities/test-question.entity").TestQuestion }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__param(3, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, testQuestion_dto_1.CreateTestQuestionDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TestQuestionController.prototype, "updateTestQuestion", null);
tslib_1.__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a testQuestion' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.NO_CONTENT }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('uuid')),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TestQuestionController.prototype, "deleteTestQuestion", null);
TestQuestionController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('TestQuestion'),
    (0, common_1.Controller)({ path: '/testQuestion', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [testQuestion_service_1.TestQuestionService])
], TestQuestionController);
exports.TestQuestionController = TestQuestionController;
