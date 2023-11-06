"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducatorController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const decorator_1 = require("nestjs-xion/decorator");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const educator_service_1 = require("./educator.service");
const educator_dto_1 = require("./educator.dto");
const academy_entity_1 = require("../../entities/academy.entity");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
let EducatorController = class EducatorController {
    constructor(educatorService) {
        this.educatorService = educatorService;
    }
    async createEducator(req) {
        const userUuid = req.payload.uuid;
        return this.educatorService.createEducator(userUuid);
    }
    async createPersonalInfo(req, dto) {
        const userUuid = req.payload.uuid;
        return this.educatorService.createPersonalInfo(userUuid, dto);
    }
    async createProduct(req, dto, files) {
        const userUuid = req.payload.uuid;
        if (files.naturalPersonPicName && files.naturalPersonPicName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(jpg|png|jpeg|pdf|docx)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.naturalPersonPicName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (files.naturalPersonIDPicName && files.naturalPersonIDPicName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(jpg|png|jpeg|pdf|docx)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.naturalPersonIDPicName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (files.naturalPersonBookletPicName &&
            files.naturalPersonBookletPicName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(jpg|png|jpeg|pdf|docx)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.naturalPersonBookletPicName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (files.legalPersonLogoName && files.legalPersonLogoName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(jpg|png|jpeg|pdf|docx)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.legalPersonLogoName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (files.legalPersonCompanyArticle && files.legalPersonCompanyArticle[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(jpg|png|jpeg|pdf|docx)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.legalPersonCompanyArticle[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (files.legalPersonNewsPaper && files.legalPersonNewsPaper[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(jpg|png|jpeg|pdf|docx)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.legalPersonNewsPaper[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (files.chairmanIDPicName && files.chairmanIDPicName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(jpg|png|jpeg|pdf|docx)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.chairmanIDPicName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (files.chairmanBookletPicName && files.chairmanBookletPicName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(jpg|png|jpeg|pdf|docx)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.chairmanBookletPicName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        return this.educatorService.createDocumentInfo(dto, userUuid, files.naturalPersonPicName && files.naturalPersonPicName[0], files.naturalPersonIDPicName && files.naturalPersonIDPicName[0], files.naturalPersonBookletPicName && files.naturalPersonBookletPicName[0], files.legalPersonLogoName && files.legalPersonLogoName[0], files.legalPersonCompanyArticle && files.legalPersonCompanyArticle[0], files.legalPersonNewsPaper && files.legalPersonNewsPaper[0], files.chairmanIDPicName && files.chairmanIDPicName[0], files.chairmanBookletPicName && files.chairmanBookletPicName[0]);
    }
    async createBankInfo(req, dto) {
        const userUuid = req.payload.uuid;
        return this.educatorService.createBankInfo(userUuid, dto);
    }
    async createTermsAndConditions(req, dto) {
        const userUuid = req.payload.uuid;
        return this.educatorService.createTermsAndConditions(userUuid, dto);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create an educator' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: academy_entity_1.Academy }),
    openapi.ApiResponse({ status: 201, type: String }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EducatorController.prototype, "createEducator", null);
tslib_1.__decorate([
    (0, common_1.Post)('personalInfo'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create personal info for an academy' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: academy_entity_1.Academy }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, educator_dto_1.PersonalInfoDto]),
    tslib_1.__metadata("design:returntype", Promise)
], EducatorController.prototype, "createPersonalInfo", null);
tslib_1.__decorate([
    (0, common_1.Post)('documentInfo'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create document info for an academy' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: academy_entity_1.Academy }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'naturalPersonPicName', maxCount: 1 },
        { name: 'naturalPersonIDPicName', maxCount: 1 },
        { name: 'naturalPersonBookletPicName', maxCount: 1 },
        { name: 'legalPersonLogoName', maxCount: 1 },
        { name: 'legalPersonCompanyArticle', maxCount: 1 },
        { name: 'legalPersonNewsPaper', maxCount: 1 },
        { name: 'chairmanIDPicName', maxCount: 1 },
        { name: 'chairmanBookletPicName', maxCount: 1 },
    ])),
    openapi.ApiResponse({ status: 201, type: require("../../entities/academy.entity").Academy }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, educator_dto_1.DocumentsInfoDto, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EducatorController.prototype, "createProduct", null);
tslib_1.__decorate([
    (0, common_1.Post)('bankInfo'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create bank info for an academy' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: academy_entity_1.Academy }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, educator_dto_1.BankInfoDto]),
    tslib_1.__metadata("design:returntype", Promise)
], EducatorController.prototype, "createBankInfo", null);
tslib_1.__decorate([
    (0, common_1.Post)('termsAndConditions'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create terms and conditions for an academy' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: academy_entity_1.Academy }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, educator_dto_1.TermsAndConditionsDto]),
    tslib_1.__metadata("design:returntype", Promise)
], EducatorController.prototype, "createTermsAndConditions", null);
EducatorController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Educator'),
    (0, common_1.Controller)({ path: '/educator/profile', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [educator_service_1.EducatorService])
], EducatorController);
exports.EducatorController = EducatorController;
