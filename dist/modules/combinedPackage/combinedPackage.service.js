"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedPackageService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const fs = tslib_1.__importStar(require("fs"));
const promises_1 = require("fs/promises");
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const _configs_1 = tslib_1.__importDefault(require("../../configs"));
const config_1 = require("nestjs-xion/config");
const combinedPackage_entity_1 = require("../../entities/combinedPackage.entity");
const products_entity_1 = require("../../entities/products.entity");
const publications_entity_1 = require("../../entities/publications.entity");
const classification_entity_1 = require("../../entities/classification.entity");
const util_1 = require("util");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
const mkdirAsync = (0, util_1.promisify)(fs.mkdir);
let CombinedPackageService = class CombinedPackageService extends crud_1.CRUDService {
    constructor(config, repo, repoProducts, repoPublications, repoClassification) {
        super(repo);
        this.config = config;
        this.repo = repo;
        this.repoProducts = repoProducts;
        this.repoPublications = repoPublications;
        this.repoClassification = repoClassification;
        this.filesConfig = this.config.get(_configs_1.default.Files);
        this.ensureDirectoryExists(this.filesConfig.combinedPackageFilePath);
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
    async getAllCombinedPackages(request) {
        const { data, total } = await this.getMany(request, {
            join: {
                product: {
                    allow: [
                        'createdAt',
                        'updatedAt',
                        'uuid',
                        'title',
                        'type',
                        'base_price',
                        'classification_uuid',
                    ],
                },
                publication: {
                    allow: [
                        'createdAt',
                        'updatedAt',
                        'uuid',
                        'title',
                        'classification_uuid',
                    ],
                },
            },
            sort: [{ field: 'createdAt', order: 'DESC' }],
        });
        return { data, total };
    }
    async getCombinedPackage(uuid) {
        const combinedPackage = await this.repo.findOne({
            where: { uuid },
            relations: ['classification', 'publication', 'product'],
        });
        if (!combinedPackage) {
            throw new common_1.BadRequestException('CombinedPackage not found');
        }
        return combinedPackage;
    }
    async createCombinedPackage(dto, picName, combinedFileName) {
        if (!dto.title) {
            throw new common_1.BadRequestException('Required fields are missing');
        }
        const productUuid = dto.product_uuid;
        const product = await this.repoProducts.findOne({
            where: { uuid: productUuid },
        });
        if (!product) {
            throw new common_1.BadRequestException('Product not found');
        }
        const publicationUuid = dto.publicationUuid;
        const publication = await this.repoPublications.findOne({
            where: { uuid: publicationUuid },
        });
        if (!publication) {
            throw new common_1.BadRequestException('Publication not found');
        }
        const classificationUuid = dto.classificationUuid;
        const classification = await this.repoClassification.findOne({
            where: { uuid: classificationUuid },
        });
        if (!classification) {
            throw new common_1.BadRequestException(`Classification not found`);
        }
        if (!combinedFileName && !picName) {
            const combinedPackage = this.repo.create(Object.assign(Object.assign({}, dto), { classification: classification }));
            return await this.repo.save(combinedPackage);
        }
        const combinedPackageData = Object.assign(Object.assign({}, dto), { classification: classification });
        if (picName) {
            const fileExtension = picName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.combinedPackageFilePath}/${randomFileName}`;
            combinedPackageData.picName = randomFileName;
            combinedPackageData.picPath = `/combinedPackage/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(picName.buffer);
            fileStream.end();
        }
        if (combinedFileName && Array.isArray(combinedFileName)) {
            combinedPackageData.combinedFileName = [];
            combinedPackageData.combinedFilePath = [];
            for (const file of combinedFileName) {
                const fileExtension = file.originalname.split('.').pop();
                const randomBytesLength = 8;
                const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
                const randomFileName = `${randomString}.${fileExtension}`;
                const filePath = `${this.filesConfig.combinedPackageFilePath}/${randomFileName}`;
                combinedPackageData.combinedFileName.push(randomFileName);
                combinedPackageData.combinedFilePath.push(`/combinedPackage/file/${randomFileName}`);
                const writeFileResult = await (0, promises_1.writeFile)(filePath, file.buffer);
            }
        }
        const combinedPackage = this.repo.create(combinedPackageData);
        return await this.repo.save(combinedPackage);
    }
    async updatecCombinedPackage(uuid, dto, picName, combinedFileName) {
        if (!dto.title) {
            throw new common_1.BadRequestException('Required fields are missing');
        }
        const existingCombinedPackage = await this.findOne({
            where: { uuid },
        });
        if (!existingCombinedPackage) {
            throw new common_1.BadRequestException('CombinedPackage not found');
        }
        const productUuid = dto.product_uuid;
        const product = await this.repoProducts.findOne({
            where: { uuid: productUuid },
        });
        if (!product) {
            throw new common_1.BadRequestException('Product not found');
        }
        const publicationUuid = dto.publicationUuid;
        const publication = await this.repoPublications.findOne({
            where: { uuid: publicationUuid },
        });
        if (!publication) {
            throw new common_1.BadRequestException('Publication not found');
        }
        existingCombinedPackage.publication = publication;
        const classificationUuid = dto.classificationUuid;
        const classification = await this.repoClassification.findOne({
            where: { uuid: classificationUuid },
        });
        if (!classification) {
            throw new common_1.BadRequestException(`Classification not found`);
        }
        existingCombinedPackage.classification = classification;
        if (picName) {
            if (existingCombinedPackage.picPath) {
                try {
                    const fullPathToDelete = `${this.filesConfig.combinedPackageFilePath}/${existingCombinedPackage.picName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting picture file');
                }
            }
            const fileExtension = picName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.combinedPackageFilePath}/${randomFileName}`;
            existingCombinedPackage.picName = randomFileName;
            existingCombinedPackage.picPath = `/combinedPackage/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(picName.buffer);
            fileStream.end();
        }
        if (combinedFileName && Array.isArray(combinedFileName)) {
            if (existingCombinedPackage.combinedFileName) {
                existingCombinedPackage.combinedFileName.forEach(async (fileName) => {
                    try {
                        const fullPathToDelete = `${this.filesConfig.combinedPackageFilePath}/${fileName}`;
                        await unlinkAsync(fullPathToDelete);
                    }
                    catch (error) {
                        throw new common_1.BadRequestException('Error deleting combined files');
                    }
                });
            }
            for (const file of combinedFileName) {
                const fileExtension = file.originalname.split('.').pop();
                const randomBytesLength = 8;
                const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
                const randomFileName = `${randomString}.${fileExtension}`;
                const filePath = `${this.filesConfig.combinedPackageFilePath}/${randomFileName}`;
                existingCombinedPackage.combinedFileName.push(randomFileName);
                existingCombinedPackage.combinedFilePath.push(`/combinedPackage/file/${randomFileName}`);
                const writeFileResult = await (0, promises_1.writeFile)(filePath, file.buffer);
            }
        }
        const updatedCombinedPackage = Object.assign(Object.assign({}, existingCombinedPackage), dto);
        await this.repo.save(updatedCombinedPackage);
        return updatedCombinedPackage;
    }
    async deleteCombinedPackage(uuid) {
        const combinedPackage = await this.repo.findOne({
            where: { uuid: uuid },
        });
        if (!combinedPackage) {
            throw new common_1.BadRequestException('CombinedPackage not found');
        }
        if (combinedPackage.picPath) {
            try {
                const fullPathToDelete = `${this.filesConfig.combinedPackageFilePath}/${combinedPackage.picName}`;
                await unlinkAsync(fullPathToDelete);
            }
            catch (error) {
                throw new common_1.BadRequestException('Error deleting pic file');
            }
        }
        if (combinedPackage.combinedFilePath) {
            combinedPackage.combinedFileName.forEach(async (fileName) => {
                try {
                    const fullPathToDelete = `${this.filesConfig.combinedPackageFilePath}/${fileName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting combined files');
                }
            });
        }
        return await this.repo.delete(uuid);
    }
};
CombinedPackageService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(combinedPackage_entity_1.CombinedPackage)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(products_entity_1.Products)),
    tslib_1.__param(3, (0, typeorm_2.InjectRepository)(publications_entity_1.Publications)),
    tslib_1.__param(4, (0, typeorm_2.InjectRepository)(classification_entity_1.Classification)),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], CombinedPackageService);
exports.CombinedPackageService = CombinedPackageService;
