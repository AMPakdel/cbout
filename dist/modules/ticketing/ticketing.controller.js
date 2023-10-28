"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const dto_1 = require("nestjs-xion/dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const ticketing_service_1 = require("./ticketing.service");
const ticketing_dto_1 = require("./ticketing.dto");
const ticketing_entity_1 = require("../../entities/ticketing.entity");
const user_entity_1 = require("../../entities/user.entity");
const ticket_message_entity_1 = require("../../entities/ticket_message.entity");
const ticketMessage_service_1 = require("./ticketMessage.service");
let TicketingController = class TicketingController {
    constructor(ticketingService, ticketMessageService) {
        this.ticketingService = ticketingService;
        this.ticketMessageService = ticketMessageService;
    }
    async getAllTicketings(req, body) {
        const userUuid = req.payload.uuid;
        const userRole = req.payload.role;
        const { search, sort, filter, page = 1 } = body;
        if (userRole === user_entity_1.Role.Admin) {
            return this.ticketingService.getAllTicketingsForAdmin(page, search, sort, filter);
        }
        else if (userRole === user_entity_1.Role.NormalUser) {
            return this.ticketingService.getAllTicketings(userUuid, page, search, sort, filter);
        }
        throw new common_1.BadRequestException('Invalid user role');
    }
    async getTicketing({ uuid }) {
        return this.ticketingService.getTicketing(uuid);
    }
    async createTicketing(req, dto, file) {
        const userUuid = req.payload.uuid;
        return this.ticketingService.createTicketing(userUuid, dto, file);
    }
    async createTicketMessage(req, dto, file) {
        const userUuid = req.payload.uuid;
        const userRole = req.payload.role;
        if (file) {
            const fileValidators = [
                new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                new common_1.FileTypeValidator({
                    fileType: '.(png|jpeg|jpg|pdf|doc|docx|ppt|pptx|zip)',
                }),
            ];
            for (const validator of fileValidators) {
                if (!validator.isValid(file)) {
                    throw new common_1.BadRequestException('File validation failed');
                }
            }
        }
        return this.ticketMessageService.createTicketMessage(userRole, userUuid, dto, file);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('all'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, decorator_1.ApiCrudQueries)(),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all ticketings' }),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingController.prototype, "getAllTicketings", null);
tslib_1.__decorate([
    (0, common_1.Get)(':uuid'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a ticketing' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [dto_1.UUIDParamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingController.prototype, "getTicketing", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a ticketing' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: ticketing_entity_1.Ticketing }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.UploadedFile)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, ticketing_dto_1.CreateTicketingDto, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingController.prototype, "createTicketing", null);
tslib_1.__decorate([
    (0, common_1.Post)('/message'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a ticket_message' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: ticket_message_entity_1.TicketMessage }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.UploadedFile)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, ticketing_dto_1.CreateTicketMessageDto, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingController.prototype, "createTicketMessage", null);
TicketingController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Ticketing'),
    (0, common_1.Controller)({ path: '/ticketing', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [ticketing_service_1.TicketingService,
        ticketMessage_service_1.TicketMessageService])
], TicketingController);
exports.TicketingController = TicketingController;
