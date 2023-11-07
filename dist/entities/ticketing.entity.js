"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticketing = exports.Importance = exports.Status = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const ticket_message_entity_1 = require("./ticket_message.entity");
const user_entity_1 = require("./user.entity");
var Status;
(function (Status) {
    Status["Pending"] = "Pending";
    Status["Tracked"] = "Tracked";
})(Status = exports.Status || (exports.Status = {}));
var Importance;
(function (Importance) {
    Importance["Low"] = "Low";
    Importance["Normal"] = "Normal";
    Importance["High"] = "High";
})(Importance = exports.Importance || (exports.Importance = {}));
let Ticketing = class Ticketing extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Ticketing.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Ticketing.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Ticketing.prototype, "related", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ generated: true }),
    tslib_1.__metadata("design:type", Number)
], Ticketing.prototype, "trackingCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Ticketing.prototype, "importance", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Ticketing.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.ticketing),
    tslib_1.__metadata("design:type", user_entity_1.User)
], Ticketing.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_message_entity_1.TicketMessage, (ticket_message) => ticket_message.ticket),
    tslib_1.__metadata("design:type", Array)
], Ticketing.prototype, "ticket_messages", void 0);
Ticketing = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Ticketing);
exports.Ticketing = Ticketing;
