"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentPortalController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const user_entity_1 = require("../../entities/user.entity");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const paymentPortal_dto_1 = require("./paymentPortal.dto");
const paymentPortal_service_1 = require("./paymentPortal.service");
let PaymentPortalController = class PaymentPortalController {
    constructor(service) {
        this.service = service;
    }
    async payRequest(req, body) {
        const { uuid, role } = req.payload;
        if (!role.includes(user_entity_1.Role.NormalUser)) {
            throw new common_1.ForbiddenException('only normal user has access to this method');
        }
        return this.service.payRequest(uuid, body);
    }
    async portalRedirect(body, transaction_id) {
        await this.service.handleRedirect(transaction_id, body);
        return { transaction_id };
    }
    async transactionResult(req, body) {
        const { uuid, role } = req.payload;
        if (!role.includes(user_entity_1.Role.NormalUser)) {
            throw new common_1.ForbiddenException('only normal user has access to this method');
        }
        return this.service.transactionResult(body, uuid);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('pay-request'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, paymentPortal_dto_1.PayRequestDto]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentPortalController.prototype, "payRequest", null);
tslib_1.__decorate([
    (0, common_1.Post)('portal-redirect'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Render)('portalRedirect'),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Query)('transaction_id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentPortalController.prototype, "portalRedirect", null);
tslib_1.__decorate([
    (0, common_1.Post)('transaction-result'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, paymentPortal_dto_1.VerifyRequestDto]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentPortalController.prototype, "transactionResult", null);
PaymentPortalController = tslib_1.__decorate([
    (0, common_1.Controller)({ path: '/payment-portal', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [paymentPortal_service_1.PaymentPortalService])
], PaymentPortalController);
exports.PaymentPortalController = PaymentPortalController;
