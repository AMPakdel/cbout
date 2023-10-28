"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.TransactonStatus = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
var TransactonStatus;
(function (TransactonStatus) {
    TransactonStatus["Created"] = "Created";
    TransactonStatus["Requested"] = "Requested";
    TransactonStatus["Failed"] = "Failed";
    TransactonStatus["Verified"] = "Verified";
    TransactonStatus["Settled"] = "Settled";
    TransactonStatus["Reversed"] = "Reversed";
})(TransactonStatus = exports.TransactonStatus || (exports.TransactonStatus = {}));
let Transaction = class Transaction extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', {
        name: 'id',
        type: 'bigint',
        unsigned: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Transaction.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Transaction.prototype, "order_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Transaction.prototype, "portal_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Transaction.prototype, "finalAmount", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ enum: TransactonStatus, default: TransactonStatus.Created }),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "portalRefId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "saleReferenceId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "responseCode", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "CreateResponse", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "RedirectResponse", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "VerifyResponse", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "SettleResponse", void 0);
Transaction = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Transaction);
exports.Transaction = Transaction;
