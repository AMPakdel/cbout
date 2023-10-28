"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstituteService = void 0;
const tslib_1 = require("tslib");
const institute_entity_1 = require("../../entities/institute.entity");
const publications_entity_1 = require("../../entities/publications.entity");
const user_constant_1 = require("../user/user.constant");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_1 = require("nestjs-xion/crud");
const typeorm_2 = require("typeorm");
const bcrypt_1 = require("bcrypt");
let InstituteService = class InstituteService extends crud_1.CRUDService {
    constructor(repo, repoPublications) {
        super(repo);
        this.repo = repo;
        this.repoPublications = repoPublications;
    }
    async findOne(options) {
        return this.repo.findOne(options);
    }
    async create(institute_data) {
        if (await this.repo.countBy({ phoneNumber: institute_data.phoneNumber })) {
            throw new common_1.BadRequestException(user_constant_1.UserError.ThisMobileAlreadyExists);
        }
        const institute = await this.repo.save(this.repo.create(institute_data));
        if (institute) {
            return institute;
        }
        throw new common_1.BadRequestException('Institute not found');
    }
    async register(institute_data) {
        try {
            const institute = await this.create(institute_data);
            return institute;
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e.message);
        }
    }
    async getAllInstitutes(search, sort, filter, page, pageSize) {
        const take = pageSize;
        const skip = (page - 1) * pageSize;
        let institutes = await this.repo.find({
            select: [
                'createdAt',
                'updatedAt',
                'uuid',
                'status',
                'email',
                'username',
                'role',
                'instituteName',
                'phoneNumber',
                'address',
                'website',
            ],
            order: { createdAt: 'ASC' },
            skip,
            take,
        });
        if (search) {
            const lowercaseSearch = search.toLowerCase();
            institutes = institutes.filter((institute) => {
                var _a, _b, _c;
                const instituteName = ((_a = institute.instituteName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
                const username = ((_b = institute.username) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || '';
                const phoneNumber = ((_c = institute.phoneNumber) === null || _c === void 0 ? void 0 : _c.toLowerCase()) || '';
                return (instituteName.includes(lowercaseSearch) ||
                    username.includes(lowercaseSearch) ||
                    phoneNumber.includes(lowercaseSearch));
            });
        }
        if (sort) {
            switch (sort) {
                case 'newest':
                    institutes = institutes.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
                    break;
                case 'oldest':
                    institutes = institutes.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
                    break;
                case 'instituteNameAscending':
                    institutes = institutes.sort((a, b) => a.instituteName.localeCompare(b.instituteName));
                    break;
                case 'instituteNameDescending':
                    institutes = institutes.sort((a, b) => b.instituteName.localeCompare(a.instituteName));
                    break;
                case 'phoneNumber':
                    institutes = institutes.sort((a, b) => a.phoneNumber.localeCompare(b.phoneNumber));
                    break;
                default:
                    throw new common_1.BadRequestException('Invalid sort option');
            }
        }
        if (filter && filter.status) {
            const statusFilter = filter.status;
            institutes = institutes.filter((institute) => statusFilter.includes(institute.status));
        }
        return institutes;
    }
    async getInstitute(uuid) {
        const institute = await this.repo.findOne({
            where: { uuid },
            relations: ['publication'],
        });
        if (!institute) {
            throw new common_1.BadRequestException('Institute not found');
        }
        return institute;
    }
    async updateProfile(uuid, dto) {
        const existingProfile = await this.findOne({ where: { uuid } });
        if (!existingProfile) {
            throw new common_1.BadRequestException('Profile not found');
        }
        const updatedProfile = Object.assign(Object.assign({}, existingProfile), dto);
        if (dto.password) {
            const salt = await (0, bcrypt_1.genSalt)(10);
            const hashedPassword = await (0, bcrypt_1.hash)(dto.password, salt);
            updatedProfile.password = hashedPassword;
        }
        await this.repo.update(uuid, updatedProfile);
        return updatedProfile;
    }
    async updateProfileAdminSide(uuid, dto) {
        const existingProfile = await this.findOne({ where: { uuid } });
        if (!existingProfile) {
            throw new common_1.BadRequestException('Profile not found');
        }
        const updatedProfile = Object.assign(Object.assign({}, existingProfile), dto);
        await this.repo.update(uuid, updatedProfile);
        return updatedProfile;
    }
    async updateInstituteStatus(instituteUuid, dto) {
        const institute = await this.findOne({
            where: { uuid: instituteUuid },
        });
        if (!institute) {
            throw new common_1.BadRequestException('Institute not found');
        }
        institute.status = dto.status;
        const updatedInstitute = await this.repo.save(institute);
        return updatedInstitute;
    }
    async assignPublicationToInstitute(instituteUuid, publicationUuid) {
        const institute = await this.repo.findOne({
            where: { uuid: instituteUuid },
        });
        if (!institute) {
            throw new common_1.BadRequestException('Institute not found');
        }
        const publication = await this.repoPublications.findOne({
            where: { uuid: publicationUuid },
        });
        if (!publication) {
            throw new common_1.BadRequestException('Publication not found');
        }
        institute.publication = publication;
        const updatedInstitute = await this.repo.save(institute);
        return updatedInstitute;
    }
};
InstituteService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(institute_entity_1.InstituteOwner)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(publications_entity_1.Publications)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], InstituteService);
exports.InstituteService = InstituteService;
