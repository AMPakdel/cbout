"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedPackageController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const combinedPackage_service_1 = require("./combinedPackage.service");
const combinedPackage_dto_1 = require("./combinedPackage.dto");
const combinedPackage_entity_1 = require("../../entities/combinedPackage.entity");
const user_entity_1 = require("../../entities/user.entity");
let CombinedPackageController = class CombinedPackageController {
    constructor(combinedPackageService) {
        this.combinedPackageService = combinedPackageService;
    }
    async getAllCombinedPackages(req, request) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.combinedPackageService.getAllCombinedPackages(request);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async getCombinedPackage(req, { uuid }) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.combinedPackageService.getCombinedPackage(uuid);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async createCombinedPackage(req, dto, files) {
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
        if (files.combinedFileName && Array.isArray(files.combinedFileName)) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 125 * 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg|pdf|doc|docx|ppt|pptx|mp4|avi|mov|wmv|mkv)',
                }),
            ];
            for (const file of files.combinedFileName) {
                for (const validator of fileValidators) {
                    if (!validator.isValid(file)) {
                        throw new common_1.BadRequestException('File validation failed');
                    }
                }
            }
        }
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.combinedPackageService.createCombinedPackage(dto, files.picName && files.picName[0], files.combinedFileName && files.combinedFileName);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async updatecCombinedPackage({ uuid }, req, dto, files) {
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
        if (files.combinedFileName && Array.isArray(files.combinedFileName)) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 125 * 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg|pdf|doc|docx|ppt|pptx|mp4|avi|mov|wmv|mkv)',
                }),
            ];
            for (const file of files.combinedFileName) {
                for (const validator of fileValidators) {
                    if (!validator.isValid(file)) {
                        throw new common_1.BadRequestException('File validation failed');
                    }
                }
            }
        }
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.combinedPackageService.updatecCombinedPackage(uuid, dto, files.picName && files.picName[0], files.combinedFileName && files.combinedFileName);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async deleteCombinedPackage(uuid, req) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.combinedPackageService.deleteCombinedPackage(uuid);
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
    (0, swagger_1.ApiOperation)({ summary: 'Get all combinedPackages' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, crud_1.ParsedRequest)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CombinedPackageController.prototype, "getAllCombinedPackages", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a combinedPackage' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CombinedPackageController.prototype, "getCombinedPackage", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a combinedPackage' }),
    (0, decorator_1.ApiStandardResponse)({
        status: common_1.HttpStatus.CREATED,
        type: combinedPackage_entity_1.CombinedPackage,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'picName', maxCount: 1 },
        { name: 'combinedFileName', maxCount: 5 },
    ])),
    openapi.ApiResponse({ status: 201, type: require("../../entities/combinedPackage.entity").CombinedPackage }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, combinedPackage_dto_1.CreateCombinedPackageDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CombinedPackageController.prototype, "createCombinedPackage", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update a combinedPackage' }),
    (0, decorator_1.ApiStandardResponse)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'picName', maxCount: 1 },
        { name: 'combinedFileName', maxCount: 5 },
    ])),
    openapi.ApiResponse({ status: 200, type: require("../../entities/combinedPackage.entity").CombinedPackage }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__param(3, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, combinedPackage_dto_1.CreateCombinedPackageDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CombinedPackageController.prototype, "updatecCombinedPackage", null);
tslib_1.__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a combinedPackage' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.NO_CONTENT }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('uuid')),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CombinedPackageController.prototype, "deleteCombinedPackage", null);
CombinedPackageController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('CombinedPackage'),
    (0, common_1.Controller)({ path: '/combinedPackage', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [combinedPackage_service_1.CombinedPackageService])
], CombinedPackageController);
exports.CombinedPackageController = CombinedPackageController;
