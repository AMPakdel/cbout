"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentPortalService = void 0;
const tslib_1 = require("tslib");
const order_entity_1 = require("../../entities/order.entity");
const transaction_entity_1 = require("../../entities/transaction.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const portalMellat_service_1 = require("./portalMellat.service");
let PaymentPortalService = class PaymentPortalService {
    constructor(portalMellatService, repoTransaction, repoOrder) {
        this.portalMellatService = portalMellatService;
        this.repoTransaction = repoTransaction;
        this.repoOrder = repoOrder;
    }
    async payRequest(user_id, body) {
        const { portal_id } = body;
        if (portal_id == 1) {
            return this.portalMellatService.payRequest(user_id, body);
        }
        throw new common_1.BadRequestException('invalid portal_id');
    }
    async handleRedirect(transaction_id, body) {
        const transaction = await this.repoTransaction.findOne({
            where: { id: Number(transaction_id) },
        });
        if (!transaction) {
            throw new common_1.NotFoundException('no transaction was found');
        }
        if (transaction.portal_id == 1) {
            return this.portalMellatService.handleRedirect(transaction, body);
        }
    }
    async transactionResult(body, user_id) {
        const { transaction_id } = body;
        const transaction = await this.repoTransaction.findOne({
            where: { id: transaction_id },
        });
        if (!(transaction === null || transaction === void 0 ? void 0 : transaction.portalRefId)) {
            throw new common_1.NotFoundException('no transaction was found');
        }
        const order = await this.repoOrder.findOne({
            where: { uuid: transaction.order_id },
            relations: {
                user: true,
            },
        });
        if (!order || !order.user || order.user.uuid != user_id) {
            throw new common_1.BadRequestException('order not found or this user doesnt have access to it');
        }
        const reponse = {
            id: transaction.id,
            status: transaction.status,
            finalAmount: transaction.finalAmount || transaction.amount,
            saleReferenceId: transaction.saleReferenceId,
            createdAt: transaction.createdAt,
        };
        return reponse;
    }
};
PaymentPortalService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(transaction_entity_1.Transaction)),
    tslib_1.__param(2, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    tslib_1.__metadata("design:paramtypes", [portalMellat_service_1.PortalMellatService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PaymentPortalService);
exports.PaymentPortalService = PaymentPortalService;
