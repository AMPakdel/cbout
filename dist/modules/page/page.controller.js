"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const page_service_1 = require("./page.service");
const page_dto_1 = require("./page.dto");
const page_entity_1 = require("../../entities/page.entity");
let PageController = class PageController {
    constructor(pageService) {
        this.pageService = pageService;
    }
    async getAllPages(req, body) {
        const userRole = req.payload.role;
        const { search, sort, filter, page = 1 } = body;
        return this.pageService.getAllPages(page, search, sort);
    }
    async getPage(req, { uuid }) {
        const userRole = req.payload.role;
        return this.pageService.getPage(uuid);
    }
    async createPage(req, dto, files) {
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
        return this.pageService.createPage(dto, files.logoFile && files.logoFile[0], files.backgroundPicFile && files.backgroundPicFile[0]);
    }
    async updatePage({ uuid }, req, dto, files) {
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
        return this.pageService.updatePage(uuid, dto, files.logoFile && files.logoFile[0], files.backgroundPicFile && files.backgroundPicFile[0]);
    }
    async deletePage(uuid, req) {
        const userRole = req.payload.role;
        return this.pageService.deletePage(uuid);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, decorator_1.ApiCrudQueries)(),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all pages' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "getAllPages", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a page' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "getPage", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a page' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: page_entity_1.Page }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'logoFile', maxCount: 1 },
        { name: 'backgroundPicFile', maxCount: 1 },
    ])),
    openapi.ApiResponse({ status: 201, type: require("../../entities/page.entity").Page }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, page_dto_1.CreatePageDto, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "createPage", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update a page' }),
    (0, decorator_1.ApiStandardResponse)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'logoFile', maxCount: 1 },
        { name: 'backgroundPicFile', maxCount: 1 },
    ])),
    openapi.ApiResponse({ status: 200, type: require("../../entities/page.entity").Page }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__param(3, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, page_dto_1.CreatePageDto, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "updatePage", null);
tslib_1.__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a page' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.NO_CONTENT }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('uuid')),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "deletePage", null);
PageController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Page'),
    (0, common_1.Controller)({ path: '/page', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [page_service_1.PageService])
], PageController);
exports.PageController = PageController;
