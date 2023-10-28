"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const fs = tslib_1.__importStar(require("fs"));
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const _configs_1 = tslib_1.__importDefault(require("../../configs"));
const config_1 = require("nestjs-xion/config");
const page_entity_1 = require("../../entities/page.entity");
const classification_entity_1 = require("../../entities/classification.entity");
const util_1 = require("util");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
const mkdirAsync = (0, util_1.promisify)(fs.mkdir);
let PageService = class PageService extends crud_1.CRUDService {
    constructor(config, repo, repoClassification) {
        super(repo);
        this.config = config;
        this.repo = repo;
        this.repoClassification = repoClassification;
        this.filesConfig = this.config.get(_configs_1.default.Files);
        this.ensureDirectoryExists(this.filesConfig.pageFilePath);
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
    async getAllPages(page, search, sort) {
        let data = await this.repo.find({
            relations: {
                classification: true,
            },
            order: { createdAt: 'DESC' },
        });
        const per_page = 20;
        if (search) {
            data = data.filter((page) => page.title && page.title.toLowerCase().includes(search.toLowerCase()));
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
        const total = data.length;
        data = data.slice((page - 1) * per_page, page * per_page);
        return { data: data, total };
    }
    async getPage(uuid) {
        const page = await this.repo.findOne({
            where: { uuid },
            relations: ['classification'],
        });
        if (!page) {
            throw new common_1.BadRequestException('Page not found');
        }
        return page;
    }
    validateRequiredFields(dto) {
        const requiredFields = [
            'title',
            'province_id',
            'address',
            'website',
            'email',
            'phoneNumber',
            'description',
        ];
        for (const field of requiredFields) {
            const fieldValue = dto[field];
            if (typeof fieldValue === 'string' && fieldValue.trim() === '') {
                throw new common_1.BadRequestException(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
            }
        }
    }
    async createPage(dto, logoFile, backgroundPicFile) {
        this.validateRequiredFields(dto);
        const existingPage = await this.repo.findOne({
            where: { title: dto.title },
        });
        if (existingPage) {
            throw new common_1.BadRequestException('Page with the same title already exists');
        }
        const classificationUuid = dto.classificationUuid;
        const classification = await this.repoClassification.findOne({
            where: { uuid: classificationUuid },
        });
        if (!classification) {
            throw new common_1.BadRequestException(`Classification not found`);
        }
        if (!logoFile && !backgroundPicFile) {
            const page = this.repo.create(Object.assign(Object.assign({}, dto), { classification: classification }));
            return await this.repo.save(page);
        }
        const pageData = Object.assign(Object.assign({}, dto), { classification: classification });
        if (logoFile) {
            const fileExtension = logoFile.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.pageFilePath}/${randomFileName}`;
            pageData.logoFileName = randomFileName;
            pageData.logoPath = `/page/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(logoFile.buffer);
            fileStream.end();
        }
        if (backgroundPicFile) {
            const fileExtension = backgroundPicFile.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.pageFilePath}/${randomFileName}`;
            pageData.backgroundPicName = randomFileName;
            pageData.backgroundPicPath = `/page/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(backgroundPicFile.buffer);
            fileStream.end();
        }
        const page = this.repo.create(pageData);
        return await this.repo.save(page);
    }
    async updatePage(uuid, dto, logoFile, backgroundPicFile) {
        this.validateRequiredFields(dto);
        const existingPage = await this.findOne({
            where: { uuid },
            relations: ['classification'],
        });
        if (!existingPage) {
            throw new common_1.BadRequestException('Page not found');
        }
        if (dto.title !== existingPage.title) {
            const existingPageWithSameTitle = await this.repo.findOne({
                where: { title: dto.title },
            });
            if (existingPageWithSameTitle) {
                throw new common_1.BadRequestException('Page with the same title already exists');
            }
        }
        const classificationUuid = dto.classificationUuid;
        const classification = await this.repoClassification.findOne({
            where: { uuid: classificationUuid },
        });
        if (!classification) {
            throw new common_1.BadRequestException(`Classification not found`);
        }
        existingPage.classification = classification;
        if (logoFile) {
            if (existingPage.logoPath) {
                try {
                    const fullPathToDelete = `${this.filesConfig.pageFilePath}/${existingPage.logoFileName}`;
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
            const filePath = `${this.filesConfig.pageFilePath}/${randomFileName}`;
            existingPage.logoFileName = randomFileName;
            existingPage.logoPath = `/page/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(logoFile.buffer);
            fileStream.end();
        }
        if (backgroundPicFile) {
            if (existingPage.backgroundPicPath) {
                try {
                    const fullPathToDelete = `${this.filesConfig.pageFilePath}/${existingPage.backgroundPicName}`;
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
            const filePath = `${this.filesConfig.pageFilePath}/${randomFileName}`;
            existingPage.backgroundPicName = randomFileName;
            existingPage.backgroundPicPath = `/page/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(backgroundPicFile.buffer);
            fileStream.end();
        }
        const updatedPage = Object.assign(Object.assign({}, existingPage), dto);
        await this.repo.save(updatedPage);
        return updatedPage;
    }
    async deletePage(uuid) {
        if (!Array.isArray(uuid)) {
            uuid = [uuid];
        }
        const pages = await this.repo.find({
            where: { uuid: (0, typeorm_1.In)(uuid) },
        });
        for (const page of pages) {
            if (page.logoPath) {
                try {
                    const fullPathToDelete = `${this.filesConfig.pageFilePath}/${page.logoFileName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting logo picture file');
                }
            }
            if (page.backgroundPicPath) {
                try {
                    const backgroundPicFullPathToDelete = `${this.filesConfig.pageFilePath}/${page.backgroundPicName}`;
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
PageService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(page_entity_1.Page)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(classification_entity_1.Classification)),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.Repository,
        typeorm_1.Repository])
], PageService);
exports.PageService = PageService;
