"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const fs = tslib_1.__importStar(require("fs"));
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const publications_entity_1 = require("../../entities/publications.entity");
const classification_entity_1 = require("../../entities/classification.entity");
const util_1 = require("util");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
const mkdirAsync = (0, util_1.promisify)(fs.mkdir);
let PublicationService = class PublicationService extends crud_1.CRUDService {
    constructor(repo, repoClassification) {
        super(repo);
        this.repo = repo;
        this.repoClassification = repoClassification;
        this.staticFilePath = './uploads/publications';
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
    async findOne(options) {
        return this.repo.findOne(options);
    }
    async getAllPublications(page, search, sort, filter) {
        let data = await this.repo.find({
            relations: {
                classification: true,
            },
            order: { createdAt: 'DESC' },
        });
        const per_page = 20;
        if (search) {
            data = data.filter((publication) => publication.title &&
                publication.title.toLowerCase().includes(search.toLowerCase()));
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
            const activeFilter = filter.isActive.toString().split(',');
            data = data.filter((classification) => activeFilter.includes(classification.isActive.toString()));
        }
        const total = data.length;
        data = data.slice((page - 1) * per_page, page * per_page);
        return { data: data, total };
    }
    async isOwnerOfFile(_userUuid, fileName) {
        const publication = await this.repo.findOne({
            where: {
                logoFileName: fileName,
            },
        });
        return !!publication;
    }
    async getPublication(uuid) {
        const publication = await this.repo.findOne({
            where: { uuid },
            relations: ['classification'],
        });
        if (!publication) {
            throw new common_1.BadRequestException('Publication not found');
        }
        return publication;
    }
    validateRequiredFields(dto) {
        const requiredFields = [
            'title',
            'province_id',
            'address',
            'website',
            'email',
            'phoneNumber',
            'tags',
            'description',
        ];
        for (const field of requiredFields) {
            const fieldValue = dto[field];
            if (typeof fieldValue === 'string' && fieldValue.trim() === '') {
                throw new common_1.BadRequestException(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
            }
        }
    }
    async createPublication(dto, logoFile, backgroundPicFile) {
        this.validateRequiredFields(dto);
        const existingPublication = await this.repo.findOne({
            where: { title: dto.title },
        });
        if (existingPublication) {
            throw new common_1.BadRequestException('Publication with the same title already exists');
        }
        const classificationUuid = dto.classificationUuid;
        const classification = await this.repoClassification.findOne({
            where: { uuid: classificationUuid },
        });
        if (!classification) {
            throw new common_1.BadRequestException(`Classification not found`);
        }
        if (!logoFile && !backgroundPicFile) {
            const publication = this.repo.create(Object.assign(Object.assign({}, dto), { classification: classification }));
            return await this.repo.save(publication);
        }
        const publicationData = Object.assign(Object.assign({}, dto), { classification: classification });
        if (logoFile) {
            const fileExtension = logoFile.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.staticFilePath}/${randomFileName}`;
            publicationData.logoFileName = randomFileName;
            publicationData.logoPath = `/publications/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(logoFile.buffer);
            fileStream.end();
        }
        if (backgroundPicFile) {
            const fileExtension = backgroundPicFile.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.staticFilePath}/${randomFileName}`;
            publicationData.backgroundPicName = randomFileName;
            publicationData.backgroundPicPath = `/publications/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(backgroundPicFile.buffer);
            fileStream.end();
        }
        const publication = this.repo.create(publicationData);
        return await this.repo.save(publication);
    }
    async updatePublication(uuid, dto, logoFile, backgroundPicFile) {
        const existingPublication = await this.findOne({
            where: { uuid },
            relations: ['classification'],
        });
        if (!existingPublication) {
            throw new common_1.BadRequestException('Publication not found');
        }
        const classificationUuid = dto.classificationUuid;
        const classification = await this.repoClassification.findOne({
            where: { uuid: classificationUuid },
        });
        if (!classification) {
            throw new common_1.BadRequestException(`Classification not found`);
        }
        existingPublication.classification = classification;
        if (logoFile) {
            if (existingPublication.logoPath) {
                try {
                    const fullPathToDelete = `${this.staticFilePath}/${existingPublication.logoFileName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting logo picture file');
                }
            }
            const fileExtension = logoFile.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.staticFilePath}/${randomFileName}`;
            existingPublication.logoFileName = randomFileName;
            existingPublication.logoPath = `/publications/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(logoFile.buffer);
            fileStream.end();
        }
        if (backgroundPicFile) {
            if (existingPublication.backgroundPicPath) {
                try {
                    const fullPathToDelete = `${this.staticFilePath}/${existingPublication.backgroundPicName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting background picture file');
                }
            }
            const fileExtension = backgroundPicFile.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.staticFilePath}/${randomFileName}`;
            existingPublication.backgroundPicName = randomFileName;
            existingPublication.backgroundPicPath = `/publications/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(backgroundPicFile.buffer);
            fileStream.end();
        }
        const updatedPublication = Object.assign(Object.assign({}, existingPublication), dto);
        await this.repo.save(updatedPublication);
        return updatedPublication;
    }
    async deletePublication(uuid) {
        if (!Array.isArray(uuid)) {
            uuid = [uuid];
        }
        const publications = await this.repo.find({
            where: { uuid: (0, typeorm_1.In)(uuid) },
        });
        for (const publication of publications) {
            if (publication.logoPath) {
                try {
                    const fullPathToDelete = `${this.staticFilePath}/${publication.logoFileName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting logo picture file');
                }
            }
            if (publication.backgroundPicPath) {
                try {
                    const backgroundPicFullPathToDelete = `${this.staticFilePath}/${publication.backgroundPicName}`;
                    await unlinkAsync(backgroundPicFullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting background picture file');
                }
            }
        }
        return await this.repo.delete(uuid);
    }
};
PublicationService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_2.InjectRepository)(publications_entity_1.Publications)),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(classification_entity_1.Classification)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], PublicationService);
exports.PublicationService = PublicationService;
