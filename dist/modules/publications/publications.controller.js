"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const publications_service_1 = require("./publications.service");
const publications_dto_1 = require("./publications.dto");
const publications_entity_1 = require("../../entities/publications.entity");
const user_entity_1 = require("../../entities/user.entity");
let PublicationController = class PublicationController {
    constructor(publicationService) {
        this.publicationService = publicationService;
    }
    async getAllPublications(req, body) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            const { search, sort, filter, page = 1 } = body;
            return this.publicationService.getAllPublications(page, search, sort, filter);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async getPublication(req, { uuid }) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.publicationService.getPublication(uuid);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async createPublications(req, dto, files) {
        const userRole = req.payload.role;
        if (files.logoFile && files.logoFile[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.logoFile[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (files.backgroundPicFile && files.backgroundPicFile[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.backgroundPicFile[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (userRole === user_entity_1.Role.Admin) {
            return this.publicationService.createPublication(dto, files.logoFile && files.logoFile[0], files.backgroundPicFile && files.backgroundPicFile[0]);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async updatePublication({ uuid }, req, dto, files) {
        const userRole = req.payload.role;
        if (files.logoFile && files.logoFile[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.logoFile[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (files.backgroundPicFile && files.backgroundPicFile[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.backgroundPicFile[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (userRole === user_entity_1.Role.Admin) {
            return this.publicationService.updatePublication(uuid, dto, files.logoFile && files.logoFile[0], files.backgroundPicFile && files.backgroundPicFile[0]);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async deletePublication(uuid, req) {
        const userUuid = req.payload.uuid;
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.publicationService.deletePublication(uuid);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('/all'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, decorator_1.ApiCrudQueries)(),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all publications' }),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicationController.prototype, "getAllPublications", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a publication' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicationController.prototype, "getPublication", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a publication' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: publications_entity_1.Publications }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'logoFile', maxCount: 1 },
        { name: 'backgroundPicFile', maxCount: 1 },
    ])),
    openapi.ApiResponse({ status: 201, type: require("../../entities/publications.entity").Publications }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, publications_dto_1.CreatePublicationDto, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicationController.prototype, "createPublications", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update a publication' }),
    (0, decorator_1.ApiStandardResponse)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'logoFile', maxCount: 1 },
        { name: 'backgroundPicFile', maxCount: 1 },
    ])),
    openapi.ApiResponse({ status: 200, type: require("../../entities/publications.entity").Publications }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__param(3, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicationController.prototype, "updatePublication", null);
tslib_1.__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a publications' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.NO_CONTENT }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('uuid')),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PublicationController.prototype, "deletePublication", null);
PublicationController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Publications'),
    (0, common_1.Controller)({ path: '/publications', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [publications_service_1.PublicationService])
], PublicationController);
exports.PublicationController = PublicationController;
