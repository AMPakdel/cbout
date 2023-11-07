"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const course_service_1 = require("./course.service");
const course_dto_1 = require("./course.dto");
const course_entity_1 = require("../../entities/course.entity");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
let CourseController = class CourseController {
    constructor(courseService) {
        this.courseService = courseService;
    }
    async getFileChest(req) {
        const userUuid = req.payload.uuid;
        return this.courseService.getFileChest(userUuid);
    }
    async getFileChestContent(req) {
        const userUuid = req.payload.uuid;
        return this.courseService.getFileChestContent(userUuid);
    }
    async getCourse({ uuid }) {
        return this.courseService.getCourse(uuid);
    }
    async createCourse(req) {
        const userUuid = req.payload.uuid;
        return this.courseService.createCourse(userUuid);
    }
    async createSubjectInfo(req, { uuid }, dto) {
        const userUuid = req.payload.uuid;
        return this.courseService.createSubjectInfo(userUuid, uuid, dto);
    }
    async createAudienceInfo(req, { uuid }, dto) {
        const userUuid = req.payload.uuid;
        return this.courseService.createAudienceInfo(userUuid, uuid, dto);
    }
    async createTopicsAndSessionsInfo(req, { uuid }, dto) {
        const userUuid = req.payload.uuid;
        return this.courseService.createTopicsAndSessionsInfo(userUuid, uuid, dto);
    }
    async createLandingPageInfo(req, { uuid }, dto) {
        const userUuid = req.payload.uuid;
        return this.courseService.createLandingPageInfo(userUuid, uuid, dto);
    }
    async createPriceInfo(req, { uuid }, dto) {
        const userUuid = req.payload.uuid;
        return this.courseService.createPriceInfo(userUuid, uuid, dto);
    }
    async createMessagesInfo(req, { uuid }, dto) {
        const userUuid = req.payload.uuid;
        return this.courseService.createMessagesInfo(userUuid, uuid, dto);
    }
    async uploadTopicsFile(req, files) {
        const userUuid = req.payload.uuid;
        if (files.file && files.file[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(pdf|doc|docx|ppt|pptx|png|jpeg|jpg|zip)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.file[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        return this.courseService.uploadTopicsFile(userUuid, files.file && files.file[0]);
    }
    async uploadTopicsVideo(req, files) {
        const userUuid = req.payload.uuid;
        if (files.file && files.file[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(mp4|avi|mov|wmv|mkv)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.file[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        return this.courseService.uploadTopicsFile(userUuid, files.file && files.file[0]);
    }
    async uploadCoverPic({ uuid }, req, files) {
        const userUuid = req.payload.uuid;
        if (files.picName && files.picName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg|zip)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.picName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        return this.courseService.uploadCoverPic(userUuid, uuid, files.picName && files.picName[0]);
    }
    async uploadAdvVideo({ uuid }, req, files) {
        const userUuid = req.payload.uuid;
        if (files.videoName && files.videoName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(mp4|avi|mov|wmv|mkv)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.videoName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        return this.courseService.uploadAdvVideo(userUuid, uuid, files.videoName && files.videoName[0]);
    }
    async releaseCourse(req, { uuid }) {
        const userUuid = req.payload.uuid;
        if (await this.courseService.areAllStepsCompleted(uuid)) {
            return this.courseService.releaseCourse(userUuid, uuid);
        }
        else {
            throw new common_1.BadRequestException('Complete all steps before releasing the course.');
        }
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('fileChest'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a fileChest' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "getFileChest", null);
tslib_1.__decorate([
    (0, common_1.Get)('fileChestContent'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a fileChest content' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "getFileChestContent", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a course' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "getCourse", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a course' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: course_entity_1.Course }),
    openapi.ApiResponse({ status: 201, type: String }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "createCourse", null);
tslib_1.__decorate([
    (0, common_1.Patch)('subjectInfo/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create subject info for a course' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: course_entity_1.Course }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO,
        course_dto_1.CreateSubjectDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "createSubjectInfo", null);
tslib_1.__decorate([
    (0, common_1.Patch)('audienceInfo/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create audience info for a course' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: course_entity_1.Course }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO,
        course_dto_1.CombinedCourseAudienceDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "createAudienceInfo", null);
tslib_1.__decorate([
    (0, common_1.Patch)('topicsInfo/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create topicsAndSessions info for a course' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: course_entity_1.Course }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO,
        course_dto_1.TopicsAndSessionsDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "createTopicsAndSessionsInfo", null);
tslib_1.__decorate([
    (0, common_1.Patch)('landingInfo/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create landing page info for a course' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: course_entity_1.Course }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO,
        course_dto_1.CourseLandingPageDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "createLandingPageInfo", null);
tslib_1.__decorate([
    (0, common_1.Patch)('pricingInfo/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create pricing info for a course' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: course_entity_1.Course }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO,
        course_dto_1.CoursePricingDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "createPriceInfo", null);
tslib_1.__decorate([
    (0, common_1.Patch)('messageInfo/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create message info for a course' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: course_entity_1.Course }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO,
        course_dto_1.CourseMessagesDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "createMessagesInfo", null);
tslib_1.__decorate([
    (0, common_1.Patch)('file/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Upload a file for topics and sessions' }),
    (0, decorator_1.ApiStandardResponse)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'file', maxCount: 1 }])),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "uploadTopicsFile", null);
tslib_1.__decorate([
    (0, common_1.Patch)('video/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Upload a video for topics and sessions' }),
    (0, decorator_1.ApiStandardResponse)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'file', maxCount: 1 }])),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "uploadTopicsVideo", null);
tslib_1.__decorate([
    (0, common_1.Patch)('cover/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Upload a pic for landing page' }),
    (0, decorator_1.ApiStandardResponse)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'picName', maxCount: 1 }])),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "uploadCoverPic", null);
tslib_1.__decorate([
    (0, common_1.Patch)('adv/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Upload a video for landing page' }),
    (0, decorator_1.ApiStandardResponse)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'videoName', maxCount: 1 }])),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "uploadAdvVideo", null);
tslib_1.__decorate([
    (0, common_1.Patch)('release/:uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Release a course if all steps are completed' }),
    openapi.ApiResponse({ status: 200, type: require("../../entities/course.entity").Course }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "releaseCourse", null);
CourseController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Course'),
    (0, common_1.Controller)({ path: '/course', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [course_service_1.CourseService])
], CourseController);
exports.CourseController = CourseController;
