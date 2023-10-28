"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonPlanService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const fs = tslib_1.__importStar(require("fs"));
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const _configs_1 = tslib_1.__importDefault(require("../../configs"));
const config_1 = require("nestjs-xion/config");
const lessonPlan_entity_1 = require("../../entities/lessonPlan.entity");
const products_entity_1 = require("../../entities/products.entity");
const util_1 = require("util");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
const mkdirAsync = (0, util_1.promisify)(fs.mkdir);
let LessonPlanService = class LessonPlanService extends crud_1.CRUDService {
    constructor(config, repo, repoProducts) {
        super(repo);
        this.config = config;
        this.repo = repo;
        this.repoProducts = repoProducts;
        this.filesConfig = this.config.get(_configs_1.default.Files);
        this.ensureDirectoryExists(this.filesConfig.lessonPlanFilePath);
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
    async getAllLessonPlans(request) {
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
            },
            sort: [{ field: 'createdAt', order: 'DESC' }],
        });
        return { data, total };
    }
    async getLessonPlan(uuid) {
        const lessonPlan = await this.repo.findOne({
            where: { uuid },
            relations: ['product'],
        });
        if (!lessonPlan) {
            throw new common_1.BadRequestException('LessonPlan not found');
        }
        return lessonPlan;
    }
    async createLessonPlan(dto, contentName) {
        if (!dto.title || !dto.product_uuid) {
            throw new common_1.BadRequestException('Required fields are missing');
        }
        const productUuid = dto.product_uuid;
        const product = await this.repoProducts.findOne({
            where: { uuid: productUuid },
        });
        if (!product) {
            throw new common_1.BadRequestException('Product not found');
        }
        if (!contentName) {
            const lessonPlan = this.repo.create(Object.assign(Object.assign({}, dto), { product: product }));
            return await this.repo.save(lessonPlan);
        }
        const lessonPlanData = Object.assign(Object.assign({}, dto), { product: product });
        if (contentName) {
            const fileExtension = contentName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.lessonPlanFilePath}/${randomFileName}`;
            lessonPlanData.contentName = randomFileName;
            lessonPlanData.contentPath = `/lessonPlan/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(contentName.buffer);
            fileStream.end();
        }
        const lessonPlan = this.repo.create(lessonPlanData);
        return await this.repo.save(lessonPlan);
    }
    async updateLessonPlan(uuid, dto, contentName) {
        if (!dto.title) {
            throw new common_1.BadRequestException('Required fields are missing');
        }
        const existingLessonPlan = await this.findOne({
            where: { uuid },
        });
        if (!existingLessonPlan) {
            throw new common_1.BadRequestException('LessonPlan not found');
        }
        const productUuid = dto.product_uuid;
        const product = await this.repoProducts.findOne({
            where: { uuid: productUuid },
        });
        if (!product) {
            throw new common_1.BadRequestException('Product not found');
        }
        existingLessonPlan.product = product;
        if (contentName) {
            if (existingLessonPlan.contentPath) {
                try {
                    const fullPathToDelete = `${this.filesConfig.lessonPlanFilePath}/${existingLessonPlan.contentName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting file');
                }
            }
            const fileExtension = contentName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.lessonPlanFilePath}/${randomFileName}`;
            existingLessonPlan.contentName = randomFileName;
            existingLessonPlan.contentPath = `/lessonPlan/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(contentName.buffer);
            fileStream.end();
        }
        const updatedLessonPlan = Object.assign(Object.assign({}, existingLessonPlan), dto);
        await this.repo.save(updatedLessonPlan);
        return updatedLessonPlan;
    }
    async deleteLessonPlan(uuid) {
        if (!Array.isArray(uuid)) {
            uuid = [uuid];
        }
        const lessonPlans = await this.repo.find({
            where: { uuid: (0, typeorm_1.In)(uuid) },
        });
        for (const lessonPlan of lessonPlans) {
            if (lessonPlan.contentPath) {
                try {
                    const fullPathToDelete = `${this.filesConfig.lessonPlanFilePath}/${lessonPlan.contentName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting file');
                }
            }
        }
        return await this.repo.delete(uuid);
    }
};
LessonPlanService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(lessonPlan_entity_1.LessonPlan)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(products_entity_1.Products)),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.Repository,
        typeorm_1.Repository])
], LessonPlanService);
exports.LessonPlanService = LessonPlanService;
