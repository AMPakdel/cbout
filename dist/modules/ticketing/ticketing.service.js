"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const fs = tslib_1.__importStar(require("fs"));
const uuidv4_1 = require("uuidv4");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const ticketing_entity_1 = require("../../entities/ticketing.entity");
const user_service_1 = require("../user/user.service");
const user_entity_1 = require("../../entities/user.entity");
const util_1 = require("util");
const ticket_message_entity_1 = require("../../entities/ticket_message.entity");
const promises_1 = require("fs/promises");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
const mkdirAsync = (0, util_1.promisify)(fs.mkdir);
let TicketingService = class TicketingService extends crud_1.CRUDService {
    constructor(repo, repoTicketMessage, repoUser, userService) {
        super(repo);
        this.repo = repo;
        this.repoTicketMessage = repoTicketMessage;
        this.repoUser = repoUser;
        this.userService = userService;
        this.staticFilePath = './uploads/ticketing';
        this.ensureDirectoryExists(this.staticFilePath);
    }
    async ensureDirectoryExists(directoryPath) {
        try {
            await mkdirAsync(directoryPath, { recursive: true });
        }
        catch (error) {
            throw new Error('Error creating directory');
        }
    }
    async getAllTicketings(userUuid, page, search, sort, filter) {
        const user = await this.repoUser.findOne({
            where: { uuid: userUuid },
            relations: ['ticketing'],
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        const per_page = 20;
        page = page || 1;
        let ticketings = user.ticketing || [];
        if (search) {
            ticketings = ticketings.filter((ticketing) => ticketing.title &&
                ticketing.title.toLowerCase().includes(search.toLowerCase()));
        }
        if (sort) {
            switch (sort) {
                case 'newest':
                    ticketings = ticketings.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
                    break;
                case 'oldest':
                    ticketings = ticketings.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
                    break;
                default:
                    throw new common_1.BadRequestException('Invalid sort option');
            }
        }
        if (filter && filter.status) {
            const statusFilter = filter.status;
            ticketings = ticketings.filter((ticketing) => statusFilter.includes(ticketing.status));
        }
        const total = ticketings.length;
        ticketings = ticketings.slice((page - 1) * per_page, page * per_page);
        return { data: ticketings, total };
    }
    async getAllTicketingsForAdmin(page, search, sort, filter) {
        let ticketings = await this.repo.find({
            order: { createdAt: 'DESC' },
        });
        const per_page = 20;
        page = page || 1;
        if (search) {
            ticketings = ticketings.filter((ticketing) => ticketing.title &&
                ticketing.title.toLowerCase().includes(search.toLowerCase()));
        }
        if (sort) {
            switch (sort) {
                case 'newest':
                    ticketings = ticketings.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
                    break;
                case 'oldest':
                    ticketings = ticketings.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
                    break;
                default:
                    throw new common_1.BadRequestException('Invalid sort option');
            }
        }
        if (filter && filter.status) {
            const statusFilter = filter.status;
            ticketings = ticketings.filter((ticketing) => statusFilter.includes(ticketing.status));
        }
        const total = ticketings.length;
        ticketings = ticketings.slice((page - 1) * per_page, page * per_page);
        return { data: ticketings, total };
    }
    async getTicketing(uuid) {
        const ticketing = await this.repo.findOne({
            where: { uuid },
            relations: {
                user: false,
                ticket_messages: true,
            },
        });
        if (!ticketing) {
            throw new common_1.BadRequestException('Ticketing not found');
        }
        return ticketing;
    }
    async createTicketing(userUuid, dto, file) {
        var _a;
        const user = await this.repoUser.findOne({ where: { uuid: userUuid } });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        let fileName = null;
        let filePath = null;
        if (file) {
            const fileExtension = (_a = file.originalname.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            fileName = (0, uuidv4_1.uuid)() + '.' + fileExtension;
            filePath = '/file/ticketing/' + fileName;
            await (0, promises_1.writeFile)(`${this.staticFilePath}/${fileName}`, file.buffer);
        }
        let ticket = this.repo.create({
            title: dto.title,
            importance: dto.importance,
            related: dto.related,
            status: ticketing_entity_1.Status.Pending,
            user: { uuid: userUuid },
        });
        ticket = await this.repo.save(ticket);
        let ticketMessage = this.repoTicketMessage.create({
            fromAdmin: false,
            body: dto.body,
            fileName,
            filePath,
            ticket: { uuid: ticket.uuid },
        });
        ticketMessage = await this.repoTicketMessage.save(ticketMessage);
        ticket.ticket_messages = [ticketMessage];
        return ticket;
    }
};
TicketingService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_2.InjectRepository)(ticketing_entity_1.Ticketing)),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(ticket_message_entity_1.TicketMessage)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        user_service_1.UserService])
], TicketingService);
exports.TicketingService = TicketingService;
