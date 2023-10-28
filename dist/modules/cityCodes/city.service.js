"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const cities_entity_1 = require("../../entities/cities.entity");
let CitiesService = class CitiesService extends crud_1.CRUDService {
    constructor(repo) {
        super(repo);
        this.repo = repo;
    }
    async findOne(options) {
        return this.repo.findOne(options);
    }
    async getAllCities(req) {
        const { data, total } = await this.getMany(req, {
            allow: ['id', 'name', 'slug'],
            sort: [{ field: 'name', order: 'DESC' }],
        });
        return { data, total };
    }
    async getCity(uuid) {
        const city = await this.repo.findOne({
            select: ['id', 'name', 'slug'],
            where: { id: uuid },
        });
        if (!city) {
            throw new common_1.BadRequestException('City not found');
        }
        return city;
    }
};
CitiesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_2.InjectRepository)(cities_entity_1.Cities)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository])
], CitiesService);
exports.CitiesService = CitiesService;
