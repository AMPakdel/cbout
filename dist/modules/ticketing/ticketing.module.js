"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ticketing_service_1 = require("./ticketing.service");
const ticketing_controller_1 = require("./ticketing.controller");
const user_entity_1 = require("../../entities/user.entity");
const ticketing_entity_1 = require("../../entities/ticketing.entity");
const user_module_1 = require("../user/user.module");
const ticketMessage_service_1 = require("./ticketMessage.service");
const ticket_message_entity_1 = require("../../entities/ticket_message.entity");
let TicketingModule = class TicketingModule {
};
TicketingModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, ticketing_entity_1.Ticketing, ticket_message_entity_1.TicketMessage]),
            user_module_1.UserModule,
        ],
        controllers: [ticketing_controller_1.TicketingController],
        providers: [ticketing_service_1.TicketingService, ticketMessage_service_1.TicketMessageService],
    })
], TicketingModule);
exports.TicketingModule = TicketingModule;
