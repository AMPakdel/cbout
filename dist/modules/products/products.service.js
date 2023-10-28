"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const fs = tslib_1.__importStar(require("fs"));
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const _configs_1 = tslib_1.__importDefault(require("../../configs"));
const config_1 = require("nestjs-xion/config");
const products_entity_1 = require("../../entities/products.entity");
const classification_entity_1 = require("../../entities/classification.entity");
const test_entity_1 = require("../../entities/test.entity");
const test_question_entity_1 = require("../../entities/test-question.entity");
const lessonPlan_entity_1 = require("../../entities/lessonPlan.entity");
const video_entity_1 = require("../../entities/video.entity");
const combinedPackage_entity_1 = require("../../entities/combinedPackage.entity");
const util_1 = require("util");
const institute_entity_1 = require("../../entities/institute.entity");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
const mkdirAsync = (0, util_1.promisify)(fs.mkdir);
let ProductsService = class ProductsService extends crud_1.CRUDService {
    constructor(config, repo, repoClassification, repoInstituteOwner, repoTest, repoTestQuestion, repoLessonPlan, repoVideo, repoCombinedPackage) {
        super(repo);
        this.config = config;
        this.repo = repo;
        this.repoClassification = repoClassification;
        this.repoInstituteOwner = repoInstituteOwner;
        this.repoTest = repoTest;
        this.repoTestQuestion = repoTestQuestion;
        this.repoLessonPlan = repoLessonPlan;
        this.repoVideo = repoVideo;
        this.repoCombinedPackage = repoCombinedPackage;
        this.filesConfig = this.config.get(_configs_1.default.Files);
        this.ensureDirectoryExists(this.filesConfig.productsFilePath);
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
    async getProductForPublication(productUuid, publicationUuid) {
        try {
            const product = await this.repo.findOne({
                where: { uuid: productUuid, publication: { uuid: publicationUuid } },
                relations: ['classification', 'lessonPlans', 'test'],
            });
            if (!product) {
                throw new common_1.BadRequestException('Product not found');
            }
            return product;
        }
        catch (err) {
            console.log('err', err);
        }
    }
    async getAllProducts(page, search, sort, filter) {
        let data = await this.repo.find({
            select: [
                'uuid',
                'title',
                'base_price',
                'createdAt',
                'updatedAt',
                'type',
                'enrollments',
            ],
            relations: {
                classification: true,
                publication: true,
            },
            order: { createdAt: 'DESC' },
        });
        const per_page = 20;
        if (search) {
            data = data.filter((product) => product.title &&
                product.title.toLowerCase().includes(search.toLowerCase()));
        }
        if (sort) {
            switch (sort) {
                case 'newest':
                    data = data.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
                    break;
                case 'oldest':
                    data = data.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
                    break;
                case 'most_expensive':
                    data = data.sort((a, b) => b.base_price - a.base_price);
                    break;
                case 'least_expensive':
                    data = data.sort((a, b) => a.base_price - b.base_price);
                    break;
                default:
                    throw new common_1.BadRequestException('Invalid sort option');
            }
        }
        if (filter) {
            Object.keys(filter).forEach((k) => {
                data = data.filter((data) => {
                    if (typeof filter[k] == 'string') {
                        filter[k] = [filter[k]];
                    }
                    const key = k;
                    if (Array.isArray(filter[k]) && data[key]) {
                        return filter[k].includes(data[key]);
                    }
                    return false;
                });
            });
        }
        const total = data.length;
        data = data.slice((page - 1) * per_page, page * per_page);
        return { data: data, total };
    }
    async getAllInstituteProducts(page, search, sort, filter, publication_uuid) {
        const queryOptions = {
            select: [
                'uuid',
                'title',
                'base_price',
                'createdAt',
                'updatedAt',
                'type',
                'enrollments',
            ],
            relations: {
                classification: true,
            },
            order: { createdAt: 'DESC' },
            where: {
                publication: { uuid: publication_uuid },
            },
        };
        let data = await this.repo.find(queryOptions);
        const per_page = 20;
        if (search) {
            data = data.filter((product) => product.title &&
                product.title.toLowerCase().includes(search.toLowerCase()));
        }
        if (sort) {
            switch (sort) {
                case 'newest':
                    data = data.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
                    break;
                case 'oldest':
                    data = data.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
                    break;
                case 'most_expensive':
                    data = data.sort((a, b) => b.base_price - a.base_price);
                    break;
                case 'least_expensive':
                    data = data.sort((a, b) => a.base_price - b.base_price);
                    break;
                default:
                    throw new common_1.BadRequestException('Invalid sort option');
            }
        }
        if (filter) {
            Object.keys(filter).forEach((k) => {
                data = data.filter((data) => {
                    if (typeof filter[k] == 'string') {
                        filter[k] = [filter[k]];
                    }
                    const key = k;
                    if (Array.isArray(filter[k]) && data[key]) {
                        return filter[k].includes(data[key]);
                    }
                    return false;
                });
            });
        }
        const total = data.length;
        data = data.slice((page - 1) * per_page, page * per_page);
        return { data: data, total };
    }
    async getProduct(uuid) {
        const product = await this.repo.findOne({
            where: { uuid },
            relations: ['classification', 'lessonPlans', 'test', 'publication'],
        });
        if (!product) {
            throw new common_1.BadRequestException('Product not found');
        }
        return product;
    }
    async getPublicationForInstituteOwner(instituteOwnerUuid) {
        const institute = await this.repoInstituteOwner.findOne({
            where: { uuid: instituteOwnerUuid },
            relations: ['publication'],
        });
        if (institute) {
            return institute.publication;
        }
        return null;
    }
    async createProduct(dto, instituteOwnerUuid, picName, bookPicName, bookFileName) {
        if (!dto.title || !dto.type) {
            throw new common_1.BadRequestException('Required fields are missing');
        }
        const classificationUuid = dto.classificationUuid;
        const classification = await this.repoClassification.findOne({
            where: { uuid: classificationUuid },
        });
        if (!classification) {
            throw new common_1.BadRequestException(`Classification not found`);
        }
        const institute = await this.repoInstituteOwner.findOne({
            where: { uuid: instituteOwnerUuid },
        });
        if (!institute) {
            throw new common_1.BadRequestException(`Institute Owner not found`);
        }
        const publication = await this.getPublicationForInstituteOwner(instituteOwnerUuid);
        if (!picName && !bookPicName && !bookFileName) {
            const product = this.repo.create(Object.assign(Object.assign({}, dto), { classification: classification, publication: publication }));
            return await this.repo.save(product);
        }
        const productData = Object.assign(Object.assign({}, dto), { classification: classification, publication: publication });
        if (picName) {
            const fileExtension = picName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.productsFilePath}/${randomFileName}`;
            productData.picName = randomFileName;
            productData.picPath = `/products/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(picName.buffer);
            fileStream.end();
        }
        if (bookPicName) {
            const fileExtension = bookPicName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.productsFilePath}/${randomFileName}`;
            productData.bookPicName = randomFileName;
            productData.bookPicPath = `/products/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(bookPicName.buffer);
            fileStream.end();
        }
        if (bookFileName) {
            const fileExtension = bookFileName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.productsFilePath}/${randomFileName}`;
            productData.bookFileName = randomFileName;
            productData.bookFilePath = `/products/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(bookFileName.buffer);
            fileStream.end();
        }
        const product = this.repo.create(productData);
        return await this.repo.save(product);
    }
    async updateProduct(uuid, dto, picName, bookPicName, bookFileName) {
        if (!dto.title || !dto.type) {
            throw new common_1.BadRequestException('Required fields are missing');
        }
        const existingProduct = await this.findOne({
            where: { uuid },
            relations: ['classification'],
        });
        if (!existingProduct) {
            throw new common_1.BadRequestException('Product not found');
        }
        const classificationUuid = dto.classificationUuid;
        const classification = await this.repoClassification.findOne({
            where: { uuid: classificationUuid },
        });
        if (!classification) {
            throw new common_1.BadRequestException(`Classification not found`);
        }
        existingProduct.classification = classification;
        if (picName) {
            if (existingProduct.picPath) {
                try {
                    const fullPathToDelete = `${this.filesConfig.productsFilePath}/${existingProduct.picName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting logo picture file');
                }
            }
            const fileExtension = picName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.productsFilePath}/${randomFileName}`;
            existingProduct.picName = randomFileName;
            existingProduct.picPath = `/products/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(picName.buffer);
            fileStream.end();
        }
        if (bookPicName) {
            if (existingProduct.bookPicPath) {
                try {
                    const fullPathToDelete = `${this.filesConfig.productsFilePath}/${existingProduct.bookPicName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting background picture file');
                }
            }
            const fileExtension = bookPicName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.productsFilePath}/${randomFileName}`;
            existingProduct.bookPicName = randomFileName;
            existingProduct.bookPicPath = `/products/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(bookPicName.buffer);
            fileStream.end();
        }
        if (bookFileName) {
            if (existingProduct.bookFilePath) {
                try {
                    const fullPathToDelete = `${this.filesConfig.productsFilePath}/${existingProduct.bookFileName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting background picture file');
                }
            }
            const fileExtension = bookFileName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.productsFilePath}/${randomFileName}`;
            existingProduct.bookFileName = randomFileName;
            existingProduct.bookFilePath = `/products/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(bookFileName.buffer);
            fileStream.end();
        }
        const updatedProduct = Object.assign(Object.assign({}, existingProduct), dto);
        await this.repo.save(updatedProduct);
        return updatedProduct;
    }
    async deleteProduct(uuid) {
        const product = await this.repo.findOne({
            where: { uuid: uuid },
            relations: ['test', 'lessonPlans'],
        });
        if (!product) {
            throw new common_1.BadRequestException('Product not found');
        }
        if (product && product.test) {
            const testUuid = product.test.uuid;
            await this.deleteTestQuestionsWithFiles(testUuid);
        }
        if (product && product.video) {
            const videoUuid = product.video.uuid;
            await this.deleteVideoFiles(videoUuid);
        }
        if (product && product.combinedPackage) {
            const combinedPackageUuid = product.combinedPackage.uuid;
            await this.deleteCombinedPackageFiles(combinedPackageUuid);
        }
        if (product && product.lessonPlans) {
            for (const lessonPlan of product.lessonPlans) {
                await this.deleteLessonPlanWithFiles(lessonPlan);
            }
        }
        if (product && product.picPath) {
            try {
                const fullPathToDelete = `${this.filesConfig.productsFilePath}/${product.picName}`;
                await unlinkAsync(fullPathToDelete);
            }
            catch (error) {
                throw new common_1.BadRequestException('Error deleting picture file');
            }
        }
        if (product && product.bookPicPath) {
            try {
                const backgroundPicFullPathToDelete = `${this.filesConfig.productsFilePath}/${product.bookPicName}`;
                await unlinkAsync(backgroundPicFullPathToDelete);
            }
            catch (error) {
                throw new common_1.BadRequestException('Error deleting background book picture file');
            }
        }
        if (product && product.bookFilePath) {
            try {
                const backgroundPicFullPathToDelete = `${this.filesConfig.productsFilePath}/${product.bookFileName}`;
                await unlinkAsync(backgroundPicFullPathToDelete);
            }
            catch (error) {
                throw new common_1.BadRequestException('Error deleting background book file');
            }
        }
        await this.repo.delete(uuid);
    }
    async deleteTestQuestionsWithFiles(testUuid) {
        const test = await this.repoTest.findOne({
            where: { uuid: testUuid },
            relations: ['testQuestions'],
        });
        if (test) {
            if (test.testQuestions) {
                for (const testQuestion of test.testQuestions) {
                    try {
                        const fullPathToDelete = `${this.filesConfig.testQuestionFilePath}/${testQuestion.picName}`;
                        await unlinkAsync(fullPathToDelete);
                        await this.repoTestQuestion.remove(testQuestion);
                    }
                    catch (error) {
                        throw new common_1.BadRequestException('Error deleting testQuestions file');
                    }
                }
            }
        }
    }
    async deleteVideoFiles(videoUuid) {
        const video = await this.repoVideo.findOne({
            where: { uuid: videoUuid },
        });
        if (!video) {
            throw new common_1.BadRequestException('Video not found');
        }
        if (video.picPath) {
            try {
                const fullPathToDelete = `${this.filesConfig.videoFilePath}/${video.picName}`;
                await unlinkAsync(fullPathToDelete);
            }
            catch (error) {
                throw new common_1.BadRequestException('Error deleting pic file');
            }
        }
        if (video.videoPath) {
            try {
                const fullPathToDelete = `${this.filesConfig.videoFilePath}/${video.videoName}`;
                await unlinkAsync(fullPathToDelete);
            }
            catch (error) {
                throw new common_1.BadRequestException('Error deleting video files');
            }
        }
    }
    async deleteCombinedPackageFiles(combinedPackageUuid) {
        const combinedPackage = await this.repoCombinedPackage.findOne({
            where: { uuid: combinedPackageUuid },
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
    }
    async deleteLessonPlanWithFiles(lessonPlan) {
        if (lessonPlan.contentPath) {
            try {
                const fullPathToDelete = `${this.filesConfig.lessonPlanFilePath}/${lessonPlan.contentName}`;
                await unlinkAsync(fullPathToDelete);
            }
            catch (error) {
                throw new common_1.BadRequestException('Error deleting lessonPlan file');
            }
        }
    }
};
ProductsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(products_entity_1.Products)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(classification_entity_1.Classification)),
    tslib_1.__param(3, (0, typeorm_2.InjectRepository)(institute_entity_1.InstituteOwner)),
    tslib_1.__param(4, (0, typeorm_2.InjectRepository)(test_entity_1.Test)),
    tslib_1.__param(5, (0, typeorm_2.InjectRepository)(test_question_entity_1.TestQuestion)),
    tslib_1.__param(6, (0, typeorm_2.InjectRepository)(lessonPlan_entity_1.LessonPlan)),
    tslib_1.__param(7, (0, typeorm_2.InjectRepository)(video_entity_1.Video)),
    tslib_1.__param(8, (0, typeorm_2.InjectRepository)(combinedPackage_entity_1.CombinedPackage)),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
