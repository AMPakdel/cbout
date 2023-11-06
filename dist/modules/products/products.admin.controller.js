"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminProductsController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const products_service_1 = require("./products.service");
const user_entity_1 = require("../../entities/user.entity");
let AdminProductsController = class AdminProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getAllProductsAdmin(req, body) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            const { search, sort, filter, page = 1 } = body;
            return this.productsService.getAllProducts(page, search, sort, filter);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async getProductAdmin(req, { uuid }) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.NormalUser) {
            return this.productsService.getProduct(uuid);
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
    (0, swagger_1.ApiOperation)({ summary: 'Get all products admin side' }),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminProductsController.prototype, "getAllProductsAdmin", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a product' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.UUIDParamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminProductsController.prototype, "getProductAdmin", null);
AdminProductsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Products Admin'),
    (0, common_1.Controller)({ path: '/products/admin', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [products_service_1.ProductsService])
], AdminProductsController);
exports.AdminProductsController = AdminProductsController;
