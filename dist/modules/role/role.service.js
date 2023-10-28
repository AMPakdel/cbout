"use strict";
var RoleService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const role_entity_1 = require("../../entities/role.entity");
const role_constant_1 = require("./role.constant");
let RoleService = RoleService_1 = class RoleService extends crud_1.CRUDService {
    constructor(repo) {
        super(repo);
        this.repo = repo;
        this.logger = new common_1.Logger(RoleService_1.name);
    }
    async getRolesByIds(options) {
        return this.repo.find(options);
    }
    async createRole({ title }) {
        await this.create(title);
        this.logger.debug(`Role [${title}] created`);
    }
    async getAll(req) {
        const { data, total } = await this.getMany(req, {
            allow: ['createdAt', 'updatedAt', 'uuid', 'title'],
            sort: [{ field: 'updatedAt', order: 'DESC' }],
        });
        return { data, total };
    }
    async findOne(options) {
        return this.repo.findOne(options);
    }
    async find(options) {
        return this.find(options);
    }
    async update({ title, uuid }) {
        if (await this.repo.countBy({ title })) {
            throw new common_1.BadRequestException(role_constant_1.RoleError.ThisTitleAlreadyExists);
        }
        await this.repo.update({ uuid }, {
            title,
        });
    }
    async create(title) {
        if (await this.repo.countBy({ title })) {
            throw new common_1.BadRequestException(role_constant_1.RoleError.ThisTitleAlreadyExists);
        }
        await this.repo.save(this.repo.create({
            title,
        }));
    }
};
RoleService = RoleService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_2.InjectRepository)(role_entity_1.Role)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository])
], RoleService);
exports.RoleService = RoleService;
