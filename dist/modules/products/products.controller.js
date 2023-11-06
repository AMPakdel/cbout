"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const jwt_get_institute_guard_1 = require("../auth/guards/jwt-get-institute.guard");
const products_service_1 = require("./products.service");
const products_dto_1 = require("./products.dto");
const products_entity_1 = require("../../entities/products.entity");
const user_entity_1 = require("../../entities/user.entity");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getAllInstituteProducts(req, body) {
        const institute = req.institute;
        const publication_uuid = institute.publication.uuid;
        const { search, sort, filter, page = 1 } = body;
        return this.productsService.getAllInstituteProducts(page, search, sort, filter, publication_uuid);
    }
    async getProduct(req, { uuid }) {
        const institute = req.institute;
        const publication_uuid = institute.publication.uuid;
        return this.productsService.getProductForPublication(uuid, publication_uuid);
    }
    async createProduct(req, dto, files) {
        const userRole = req.payload.role;
        const instituteOwnerUuid = req.payload.uuid;
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
        if (files.bookPicName && files.bookPicName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.bookPicName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (files.bookFileName && files.bookFileName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(pdf|doc|docx|ppt|pptx)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.bookFileName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.productsService.createProduct(dto, instituteOwnerUuid, files.picName && files.picName[0], files.bookPicName && files.bookPicName[0], files.bookFileName && files.bookFileName[0]);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async updateProduct({ uuid }, req, dto, files) {
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
        if (files.bookPicName && files.bookPicName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.bookPicName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (files.bookFileName && files.bookFileName[0]) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(pdf|doc|docx|ppt|pptx)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(files.bookFileName[0])) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.productsService.updateProduct(uuid, dto, files.picName && files.picName[0], files.bookPicName && files.bookPicName[0], files.bookFileName && files.bookFileName[0]);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async deleteProduct(uuid, req) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.productsService.deleteProduct(uuid);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('/all'),
    (0, common_1.UseGuards)(jwt_get_institute_guard_1.JwtGetInstituteGuard),
    (0, decorator_1.ApiCrudQueries)(),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all institute products' }),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "getAllInstituteProducts", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_institute_guard_1.JwtGetInstituteGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a product' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "getProduct", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a product' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: products_entity_1.Products }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'picName', maxCount: 1 },
        { name: 'bookPicName', maxCount: 1 },
        { name: 'bookFileName', maxCount: 1 },
    ])),
    openapi.ApiResponse({ status: 201, type: require("../../entities/products.entity").Products }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, products_dto_1.CreateProductsDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "createProduct", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update a product' }),
    (0, decorator_1.ApiStandardResponse)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'picName', maxCount: 1 },
        { name: 'bookPicName', maxCount: 1 },
        { name: 'bookFileName', maxCount: 1 },
    ])),
    openapi.ApiResponse({ status: 200, type: require("../../entities/products.entity").Products }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__param(3, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, products_dto_1.CreateProductsDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProduct", null);
tslib_1.__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a product' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.NO_CONTENT }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('uuid')),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProduct", null);
ProductsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.Controller)({ path: '/products', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
