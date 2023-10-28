"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassificationService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const classification_entity_1 = require("../../entities/classification.entity");
let ClassificationService = class ClassificationService extends crud_1.CRUDService {
    constructor(repo) {
        super(repo);
        this.repo = repo;
    }
    async findOne(options) {
        return this.repo.findOne(options);
    }
    async getAllClassifications(search, sort, filter, type) {
        let data = await this.repo.find({
            select: ['createdAt', 'updatedAt', 'uuid', 'title', 'type', 'isActive'],
            where: (type ? { type: type } : {}),
        });
        if (search) {
            data = data.filter((classification) => classification.title &&
                classification.title.toLowerCase().includes(search.toLowerCase()));
        }
        if (sort) {
            switch (sort) {
                case 'newest':
                    data = data.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
                    break;
                case 'oldest':
                    data = data.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
                    break;
                default:
                    throw new common_1.BadRequestException('Invalid sort option');
            }
        }
        if (filter) {
            const activeFilter = filter.isActive.toString();
            data = data.filter((classification) => activeFilter.includes(classification.isActive.toString()));
        }
        const total = data.length;
        return { data: data, total };
    }
    async createClassification(dto) {
        if (!dto.title || !dto.type) {
            throw new common_1.BadRequestException('Required fields are missing');
        }
        const classification = this.repo.create(dto);
        return await this.repo.save(classification);
    }
    async updateClassification(uuid, dto) {
        const existingClassification = await this.findOne({ where: { uuid } });
        if (!existingClassification) {
            throw new common_1.BadRequestException('Classification not found');
        }
        const updatedClassification = Object.assign(Object.assign({}, existingClassification), dto);
        await this.repo.update(uuid, updatedClassification);
        return updatedClassification;
    }
    async deleteClassification(uuid) {
        return await this.repo.delete(uuid);
    }
};
ClassificationService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_2.InjectRepository)(classification_entity_1.Classification)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository])
], ClassificationService);
exports.ClassificationService = ClassificationService;
