"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonPlanController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const lessonPlan_service_1 = require("./lessonPlan.service");
const lessonPlan_dto_1 = require("./lessonPlan.dto");
const lessonPlan_entity_1 = require("../../entities/lessonPlan.entity");
const user_entity_1 = require("../../entities/user.entity");
let LessonPlanController = class LessonPlanController {
    constructor(lessonPlanService) {
        this.lessonPlanService = lessonPlanService;
    }
    async getAllLessonPlans(req, request) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.lessonPlanService.getAllLessonPlans(request);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async getLessonPlan(req, { uuid }) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.lessonPlanService.getLessonPlan(uuid);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async createLessonPlan(req, dto, files) {
        const userRole = req.payload.role;
        if (files.contentName && files.contentName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg|pdf|doc|docx|ppt|pptx|zip)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.contentName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (userRole === user_entity_1.Role.Admin) {
            return this.lessonPlanService.createLessonPlan(dto, files.contentName && files.contentName[0]);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async updateLessonPlan({ uuid }, req, dto, files) {
        const userRole = req.payload.role;
        if (files.contentName && files.contentName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg|pdf|doc|docx|ppt|pptx|zip)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.contentName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.lessonPlanService.updateLessonPlan(uuid, dto, files.contentName && files.contentName[0]);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async deleteLessonPlan(uuid, req) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.lessonPlanService.deleteLessonPlan(uuid);
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
    (0, swagger_1.ApiOperation)({ summary: 'Get all lessonPlans' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, crud_1.ParsedRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LessonPlanController.prototype, "getAllLessonPlans", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a lessonPlan' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], LessonPlanController.prototype, "getLessonPlan", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a lessonPlan' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: lessonPlan_entity_1.LessonPlan }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'contentName', maxCount: 1 }])),
    openapi.ApiResponse({ status: 201, type: require("../../entities/lessonPlan.entity").LessonPlan }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, lessonPlan_dto_1.CreateLessonPlanDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LessonPlanController.prototype, "createLessonPlan", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update a lessonPlan' }),
    (0, decorator_1.ApiStandardResponse)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'contentName', maxCount: 1 }])),
    openapi.ApiResponse({ status: 200, type: require("../../entities/lessonPlan.entity").LessonPlan }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__param(3, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, lessonPlan_dto_1.CreateLessonPlanDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LessonPlanController.prototype, "updateLessonPlan", null);
tslib_1.__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a lessonPlan' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.NO_CONTENT }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('uuid')),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LessonPlanController.prototype, "deleteLessonPlan", null);
LessonPlanController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('LessonPlan'),
    (0, common_1.Controller)({ path: '/lessonPlan', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [lessonPlan_service_1.LessonPlanService])
], LessonPlanController);
exports.LessonPlanController = LessonPlanController;
