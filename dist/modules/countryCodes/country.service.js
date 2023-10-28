"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const countries_entity_1 = require("../../entities/countries.entity");
let CountriesService = class CountriesService extends crud_1.CRUDService {
    constructor(repo) {
        super(repo);
        this.repo = repo;
    }
    async findOne(options) {
        return this.repo.findOne(options);
    }
    async getAllCountries(req) {
        const { data, total } = await this.getMany(req, {
            allow: ['id', 'name', 'slug'],
            sort: [{ field: 'name', order: 'DESC' }],
        });
        return { data, total };
    }
    async getCountry(uuid) {
        const country = await this.repo.findOne({
            select: ['id', 'name', 'slug'],
            where: { id: uuid },
        });
        if (!country) {
            throw new common_1.BadRequestException('Country not found');
        }
        return country;
    }
};
CountriesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_2.InjectRepository)(countries_entity_1.Countries)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository])
], CountriesService);
exports.CountriesService = CountriesService;
