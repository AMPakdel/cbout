"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const video_service_1 = require("./video.service");
const video_dto_1 = require("./video.dto");
const video_entity_1 = require("../../entities/video.entity");
const user_entity_1 = require("../../entities/user.entity");
let VideoController = class VideoController {
    constructor(videoService) {
        this.videoService = videoService;
    }
    async getAllVideos(req, request) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.videoService.getAllVideos(request);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async getVideo(req, { uuid }) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.videoService.getVideo(uuid);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async createVideo(req, dto, files) {
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
        if (files.videoName && files.videoName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 125 * 1024 * 1024 }),
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
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.videoService.createVideo(dto, files.picName && files.picName[0], files.videoName && files.videoName[0]);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async updateVideo({ uuid }, req, dto, files) {
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
        if (files.videoName && files.videoName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 125 * 1024 * 1024 }),
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
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.videoService.updateVideo(uuid, dto, files.picName && files.picName[0], files.videoName && files.videoName[0]);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async deleteVideo(uuid, req) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.videoService.deleteVideo(uuid);
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
    (0, swagger_1.ApiOperation)({ summary: 'Get all videos' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, crud_1.ParsedRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoController.prototype, "getAllVideos", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a video' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoController.prototype, "getVideo", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a video' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: video_entity_1.Video }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'picName', maxCount: 1 },
        { name: 'videoName', maxCount: 1 },
    ])),
    openapi.ApiResponse({ status: 201, type: require("../../entities/video.entity").Video }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, video_dto_1.CreateVideoDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoController.prototype, "createVideo", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update a video' }),
    (0, decorator_1.ApiStandardResponse)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'picName', maxCount: 1 },
        { name: 'videoName', maxCount: 1 },
    ])),
    openapi.ApiResponse({ status: 200, type: require("../../entities/video.entity").Video }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__param(3, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, video_dto_1.CreateVideoDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VideoController.prototype, "updateVideo", null);
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
], VideoController.prototype, "deleteVideo", null);
VideoController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Video'),
    (0, common_1.Controller)({ path: '/video', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [video_service_1.VideoService])
], VideoController);
exports.VideoController = VideoController;
