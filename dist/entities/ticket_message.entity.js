"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketMessage = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const ticketing_entity_1 = require("./ticketing.entity");
let TicketMessage = class TicketMessage extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], TicketMessage.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", Object)
], TicketMessage.prototype, "body", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], TicketMessage.prototype, "fromAdmin", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", Object)
], TicketMessage.prototype, "fileName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", Object)
], TicketMessage.prototype, "filePath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => ticketing_entity_1.Ticketing, (ticket) => ticket.ticket_messages),
    (0, typeorm_1.JoinColumn)({ name: 'ticket_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", ticketing_entity_1.Ticketing)
], TicketMessage.prototype, "ticket", void 0);
TicketMessage = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], TicketMessage);
exports.TicketMessage = TicketMessage;
