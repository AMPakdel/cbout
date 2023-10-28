"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketMessageService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const fs = tslib_1.__importStar(require("fs"));
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const ticketing_entity_1 = require("../../entities/ticketing.entity");
const user_entity_1 = require("../../entities/user.entity");
const util_1 = require("util");
const ticket_message_entity_1 = require("../../entities/ticket_message.entity");
const promises_1 = require("fs/promises");
const uuidv4_1 = require("uuidv4");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
const mkdirAsync = (0, util_1.promisify)(fs.mkdir);
let TicketMessageService = class TicketMessageService extends crud_1.CRUDService {
    constructor(repo, repoTicket, repoUser) {
        super(repo);
        this.repo = repo;
        this.repoTicket = repoTicket;
        this.repoUser = repoUser;
        this.staticFilePath = './uploads/ticketing';
    }
    async createTicketMessage(userRole, userUuid, dto, file) {
        var _a;
        if (!file && !dto.body) {
            throw new common_1.BadRequestException("message body and file can't be empty at the same time");
        }
        const user = await this.repoUser.findOne({ where: { uuid: userUuid } });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        const ticket = await this.repoTicket.findOne({
            where: { uuid: dto.ticket_uuid },
        });
        if (!ticket) {
            throw new common_1.BadRequestException('Ticket not found');
        }
        let fromAdmin = false;
        let status = ticketing_entity_1.Status.Pending;
        if (userRole === user_entity_1.Role.Admin) {
            fromAdmin = true;
            status = ticketing_entity_1.Status.Tracked;
        }
        let fileName = null;
        let filePath = null;
        if (file) {
            const fileExtension = (_a = file.originalname.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            fileName = (0, uuidv4_1.uuid)() + '.' + fileExtension;
            filePath = '/file/ticketing/' + fileName;
            await (0, promises_1.writeFile)(`${this.staticFilePath}/${fileName}`, file.buffer);
        }
        let ticketMessage = this.repo.create({
            fromAdmin,
            body: dto.body,
            fileName,
            filePath,
            ticket: { uuid: ticket.uuid },
        });
        ticketMessage = await this.repo.save(ticketMessage);
        if (ticket.status != status) {
            await this.repoTicket.save(ticket);
        }
        return ticketMessage;
    }
};
TicketMessageService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_2.InjectRepository)(ticket_message_entity_1.TicketMessage)),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(ticketing_entity_1.Ticketing)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], TicketMessageService);
exports.TicketMessageService = TicketMessageService;
