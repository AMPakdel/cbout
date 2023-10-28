"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentPortalModule = void 0;
const tslib_1 = require("tslib");
const order_entity_1 = require("../../entities/order.entity");
const transaction_entity_1 = require("../../entities/transaction.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const paymentPortal_controller_1 = require("./paymentPortal.controller");
const paymentPortal_service_1 = require("./paymentPortal.service");
const portalMellat_service_1 = require("./portalMellat.service");
let paymentPortalModule = class paymentPortalModule {
};
paymentPortalModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([transaction_entity_1.Transaction, order_entity_1.Order])],
        controllers: [paymentPortal_controller_1.PaymentPortalController],
        providers: [paymentPortal_service_1.PaymentPortalService, portalMellat_service_1.PortalMellatService],
    })
], paymentPortalModule);
exports.paymentPortalModule = paymentPortalModule;
