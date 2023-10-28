"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalMellatService = void 0;
const tslib_1 = require("tslib");
const order_entity_1 = require("../../entities/order.entity");
const transaction_entity_1 = require("../../entities/transaction.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Mellat_class_1 = require("./portals/Mellat.class");
let PortalMellatService = class PortalMellatService {
    constructor(repoTransaction, repoOrder) {
        this.repoTransaction = repoTransaction;
        this.repoOrder = repoOrder;
        this.mellat = new Mellat_class_1.Mellat();
        this.portal_id = 1;
    }
    async payRequest(user_id, body) {
        var _a, _b;
        const { order_id } = body;
        const order = await this.repoOrder.findOne({
            select: ['uuid', 'final_price'],
            where: { uuid: order_id },
            relations: {
                user: true,
            },
        });
        if (!(order === null || order === void 0 ? void 0 : order.final_price)) {
            throw new common_1.BadRequestException('order or order.final_price is not valid');
        }
        if ((order === null || order === void 0 ? void 0 : order.user.uuid) != user_id) {
            throw new common_1.ForbiddenException('token does not belong to order_owner');
        }
        const transaction = this.repoTransaction.create({
            order_id: order.uuid,
            amount: 10000,
            portal_id: this.portal_id,
        });
        await this.repoTransaction.save(transaction);
        const portalRes = await new Promise((resolve) => {
            try {
                this.mellat.paymentRequest({
                    amount: transaction.amount,
                    orderId: transaction.id.toString(),
                    callbackUrl: 'https://cipherland.ir/api/v1/payment-portal/portal-redirect?transaction_id=' +
                        transaction.id.toString(),
                    payerId: order.user.phoneNumber,
                }, (err, result) => {
                    if (err) {
                        resolve({ error: err === null || err === void 0 ? void 0 : err.message, data: null });
                    }
                    else {
                        resolve({ error: null, data: result });
                    }
                });
            }
            catch (e) {
                resolve({ error: e.message, data: null });
            }
        });
        transaction.CreateResponse = JSON.stringify(portalRes);
        if ((_a = portalRes.data) === null || _a === void 0 ? void 0 : _a.refId) {
            transaction.portalRefId = (_b = portalRes.data) === null || _b === void 0 ? void 0 : _b.refId;
            transaction.status = transaction_entity_1.TransactonStatus.Requested;
        }
        await this.repoTransaction.save(transaction);
        return {
            transaction: transaction,
            portal_result: portalRes,
            portal_url: 'https://bpm.shaparak.ir/pgwchannel/startpay.mellat',
        };
    }
    async handleRedirect(transaction, body) {
        transaction.RedirectResponse = JSON.stringify(body);
        transaction.finalAmount = body.FinalAmount;
        transaction.saleReferenceId = body.SaleReferenceId;
        await this.repoTransaction.save(transaction);
        if (body.ResCode == '0') {
            await this.verifyRequest(transaction, Number(body.SaleReferenceId));
        }
        else {
            const order = await this.repoOrder.findOne({
                where: { uuid: transaction.order_id },
            });
            if (order) {
                order.status = order_entity_1.Status.Failed;
                await this.repoOrder.save(order);
            }
        }
    }
    async verifyRequest(transaction, saleReferenceId) {
        const portalResult = await new Promise((resolve) => {
            try {
                this.mellat.verifyPayment({
                    orderId: Number(transaction.id),
                    saleOrderId: Number(transaction.id),
                    saleReferenceId: saleReferenceId,
                }, (err, result) => {
                    if (err) {
                        resolve({ error: err === null || err === void 0 ? void 0 : err.message, data: null });
                    }
                    else {
                        resolve({ error: null, data: result });
                    }
                });
            }
            catch (e) {
                resolve({ error: e.message, data: null });
            }
        });
        const { error: portalResultError, data: portalResultData } = portalResult;
        transaction.VerifyResponse = JSON.stringify(portalResult);
        await this.repoTransaction.save(transaction);
        const order = await this.repoOrder.findOne({
            where: { uuid: transaction.order_id },
        });
        if (!order) {
            throw new common_1.BadRequestException('order not found!');
        }
        if (!portalResultError && (portalResultData === null || portalResultData === void 0 ? void 0 : portalResultData.resCode) == 0) {
            order.status = order_entity_1.Status.Successful;
            this.settlePayment(Number(transaction.id), saleReferenceId);
        }
        else {
            order.status = order_entity_1.Status.Failed;
        }
        await this.repoOrder.save(order);
    }
    async settlePayment(transactionId, saleReferenceId) {
        const portalResult = await new Promise((resolve) => {
            try {
                this.mellat.settlePayment({
                    orderId: transactionId,
                    saleOrderId: transactionId,
                    saleReferenceId,
                }, (err, result) => {
                    if (err) {
                        resolve({ error: err === null || err === void 0 ? void 0 : err.message, data: null });
                    }
                    else {
                        resolve({ error: null, data: result });
                    }
                });
            }
            catch (e) {
                resolve({ error: e.message, data: null });
            }
        });
        const transaction = await this.repoTransaction.findOne({
            where: { id: transactionId },
        });
        if (!transaction) {
            return;
        }
        transaction.SettleResponse = JSON.stringify(portalResult);
        const { error: portalResultError, data: portalResultData } = portalResult;
        if (!portalResultError) {
            if ((portalResultData === null || portalResultData === void 0 ? void 0 : portalResultData.resCode) == 0 || (portalResultData === null || portalResultData === void 0 ? void 0 : portalResultData.resCode) == 45) {
                transaction.status = transaction_entity_1.TransactonStatus.Settled;
            }
            else {
                transaction.status = transaction_entity_1.TransactonStatus.Failed;
            }
        }
        await this.repoTransaction.save(transaction);
    }
};
PortalMellatService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(transaction_entity_1.Transaction)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PortalMellatService);
exports.PortalMellatService = PortalMellatService;
