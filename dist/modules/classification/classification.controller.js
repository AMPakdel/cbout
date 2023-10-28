"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassificationController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const classification_service_1 = require("./classification.service");
const classification_dto_1 = require("./classification.dto");
const classification_entity_1 = require("../../entities/classification.entity");
const user_entity_1 = require("../../entities/user.entity");
let ClassificationController = class ClassificationController {
    constructor(classificationService) {
        this.classificationService = classificationService;
    }
    async getAllClassifications(req, body) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            const { search, sort, filter, type } = body;
            return this.classificationService.getAllClassifications(search, sort, filter, type);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async createClassification(req, dto) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.classificationService.createClassification(dto);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async updateClassification({ uuid }, req, dto) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.classificationService.updateClassification(uuid, dto);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
    async deleteClassification(uuid, req) {
        const userRole = req.payload.role;
        if (userRole === user_entity_1.Role.Admin) {
            return this.classificationService.deleteClassification(uuid);
        }
        else {
            throw new common_1.BadRequestException('Permission denied');
        }
    }
};
tslib_1.__decorate([
    (0, common_1.Post)("all"),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, decorator_1.ApiCrudQueries)(),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all classifications' }),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificationController.prototype, "getAllClassifications", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a classification' }),
    (0, decorator_1.ApiStandardResponse)({
        status: common_1.HttpStatus.CREATED,
        type: classification_entity_1.Classification,
    }),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, classification_dto_1.CreateClassificationDto]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificationController.prototype, "createClassification", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update a classification' }),
    (0, decorator_1.ApiStandardResponse)(),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    openapi.ApiResponse({ status: 200, type: require("../../entities/classification.entity").Classification }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO, Object, classification_dto_1.CreateClassificationDto]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificationController.prototype, "updateClassification", null);
tslib_1.__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a classification' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.NO_CONTENT }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('uuid')),
    tslib_1.__param(1, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClassificationController.prototype, "deleteClassification", null);
ClassificationController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Classification'),
    (0, common_1.Controller)({ path: '/classification', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [classification_service_1.ClassificationService])
], ClassificationController);
exports.ClassificationController = ClassificationController;
