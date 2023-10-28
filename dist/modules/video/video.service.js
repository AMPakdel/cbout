"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const fs = tslib_1.__importStar(require("fs"));
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const _configs_1 = tslib_1.__importDefault(require("../../configs"));
const config_1 = require("nestjs-xion/config");
const video_entity_1 = require("../../entities/video.entity");
const products_entity_1 = require("../../entities/products.entity");
const classification_entity_1 = require("../../entities/classification.entity");
const util_1 = require("util");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
const mkdirAsync = (0, util_1.promisify)(fs.mkdir);
let VideoService = class VideoService extends crud_1.CRUDService {
    constructor(config, repo, repoProducts, repoClassification) {
        super(repo);
        this.config = config;
        this.repo = repo;
        this.repoProducts = repoProducts;
        this.repoClassification = repoClassification;
        this.filesConfig = this.config.get(_configs_1.default.Files);
        this.ensureDirectoryExists(this.filesConfig.videoFilePath);
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
    async getAllVideos(request) {
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
    async getVideo(uuid) {
        const video = await this.repo.findOne({
            where: { uuid },
            relations: ['classification', 'product'],
        });
        if (!video) {
            throw new common_1.BadRequestException('Video not found');
        }
        return video;
    }
    async createVideo(dto, picName, videoName) {
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
        const classificationUuid = dto.classificationUuid;
        const classification = await this.repoClassification.findOne({
            where: { uuid: classificationUuid },
        });
        if (!classification) {
            throw new common_1.BadRequestException(`Classification not found`);
        }
        if (!picName && !videoName) {
            const video = this.repo.create(Object.assign(Object.assign({}, dto), { classification: classification }));
            return await this.repo.save(video);
        }
        const videoData = Object.assign(Object.assign({}, dto), { classification: classification });
        if (picName) {
            const fileExtension = picName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.videoFilePath}/${randomFileName}`;
            videoData.picName = randomFileName;
            videoData.picPath = `/video/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(picName.buffer);
            fileStream.end();
        }
        if (videoName) {
            const fileExtension = videoName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.videoFilePath}/${randomFileName}`;
            videoData.videoName = randomFileName;
            videoData.videoPath = `/video/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(videoName.buffer);
            fileStream.end();
        }
        const video = this.repo.create(videoData);
        return await this.repo.save(video);
    }
    async updateVideo(uuid, dto, picName, videoName) {
        if (!dto.title) {
            throw new common_1.BadRequestException('Required fields are missing');
        }
        const existingVideo = await this.findOne({
            where: { uuid },
        });
        if (!existingVideo) {
            throw new common_1.BadRequestException('Video not found');
        }
        const productUuid = dto.product_uuid;
        const product = await this.repoProducts.findOne({
            where: { uuid: productUuid },
        });
        if (!product) {
            throw new common_1.BadRequestException('Product not found');
        }
        const classificationUuid = dto.classificationUuid;
        const classification = await this.repoClassification.findOne({
            where: { uuid: classificationUuid },
        });
        if (!classification) {
            throw new common_1.BadRequestException(`Classification not found`);
        }
        existingVideo.classification = classification;
        if (picName) {
            if (existingVideo.picPath) {
                try {
                    const fullPathToDelete = `${this.filesConfig.videoFilePath}/${existingVideo.picName}`;
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
            const filePath = `${this.filesConfig.videoFilePath}/${randomFileName}`;
            existingVideo.picName = randomFileName;
            existingVideo.picPath = `/video/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(picName.buffer);
            fileStream.end();
        }
        if (videoName) {
            if (existingVideo.videoPath) {
                try {
                    const fullPathToDelete = `${this.filesConfig.videoFilePath}/${existingVideo.videoName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting background picture file');
                }
            }
            const fileExtension = videoName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.videoFilePath}/${randomFileName}`;
            existingVideo.videoName = randomFileName;
            existingVideo.videoPath = `/video/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(videoName.buffer);
            fileStream.end();
        }
        const updatedVideo = Object.assign(Object.assign({}, existingVideo), dto);
        await this.repo.save(updatedVideo);
        return updatedVideo;
    }
    async deleteVideo(uuid) {
        const video = await this.repo.findOne({
            where: { uuid: uuid },
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
        return await this.repo.delete(uuid);
    }
};
VideoService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(video_entity_1.Video)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(products_entity_1.Products)),
    tslib_1.__param(3, (0, typeorm_2.InjectRepository)(classification_entity_1.Classification)),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], VideoService);
exports.VideoService = VideoService;
