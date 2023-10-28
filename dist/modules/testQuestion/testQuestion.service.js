"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestQuestionService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const fs = tslib_1.__importStar(require("fs"));
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const _configs_1 = tslib_1.__importDefault(require("../../configs"));
const config_1 = require("nestjs-xion/config");
const test_question_entity_1 = require("../../entities/test-question.entity");
const test_entity_1 = require("../../entities/test.entity");
const util_1 = require("util");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
const mkdirAsync = (0, util_1.promisify)(fs.mkdir);
let TestQuestionService = class TestQuestionService extends crud_1.CRUDService {
    constructor(config, repo, repoTest) {
        super(repo);
        this.config = config;
        this.repo = repo;
        this.repoTest = repoTest;
        this.filesConfig = this.config.get(_configs_1.default.Files);
        this.ensureDirectoryExists(this.filesConfig.testQuestionFilePath);
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
    async getAllTestQuestions(request) {
        const { data, total } = await this.getMany(request, {
            join: {
                test: {
                    allow: [
                        'createdAt',
                        'updatedAt',
                        'uuid',
                        'title',
                        'type',
                        'description',
                        'shuffleQuestions',
                        'shuffleChoices',
                        'product_uuid',
                    ],
                },
            },
            sort: [{ field: 'createdAt', order: 'DESC' }],
        });
        return { data, total };
    }
    async getTestQuestion(uuid) {
        const testQuestion = await this.repo.findOne({
            where: { uuid },
            relations: ['test'],
        });
        if (!testQuestion) {
            throw new common_1.BadRequestException('testQuestion not found');
        }
        return testQuestion;
    }
    async createTestQuestion(dto, picName) {
        if (!dto.question ||
            !dto.type ||
            !dto.choiceOne ||
            !dto.choiceTwo ||
            !dto.choiceThree ||
            !dto.choiceFour ||
            !dto.trueChoice ||
            !dto.test_uuid) {
            throw new common_1.BadRequestException('Required fields are missing');
        }
        const testUuid = dto.test_uuid;
        const test = await this.repoTest.findOne({
            where: { uuid: testUuid },
        });
        if (!test) {
            throw new common_1.BadRequestException('Test not found');
        }
        if (!picName) {
            const testQuestion = this.repo.create(Object.assign(Object.assign({}, dto), { test: test }));
            return await this.repo.save(testQuestion);
        }
        const testQuestionData = Object.assign(Object.assign({}, dto), { test: test });
        if (picName) {
            const fileExtension = picName.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.filesConfig.testQuestionFilePath}/${randomFileName}`;
            testQuestionData.picName = randomFileName;
            testQuestionData.picPath = `/testQuestion/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(picName.buffer);
            fileStream.end();
        }
        const testQuestion = this.repo.create(testQuestionData);
        return await this.repo.save(testQuestion);
    }
    async updateTestQuestion(uuid, dto, picName) {
        if (!dto.question ||
            !dto.type ||
            !dto.choiceOne ||
            !dto.choiceTwo ||
            !dto.choiceThree ||
            !dto.choiceFour ||
            !dto.trueChoice) {
            throw new common_1.BadRequestException('Required fields are missing');
        }
        const existingTestQuestion = await this.findOne({
            where: { uuid },
        });
        if (!existingTestQuestion) {
            throw new common_1.BadRequestException('TestQuestion not found');
        }
        const testUuid = dto.test_uuid;
        const test = await this.repoTest.findOne({
            where: { uuid: testUuid },
        });
        if (!test) {
            throw new common_1.BadRequestException('Test not found');
        }
        existingTestQuestion.test = test;
        if (picName) {
            if (existingTestQuestion.picPath) {
                try {
                    const fullPathToDelete = `${this.filesConfig.testQuestionFilePath}/${existingTestQuestion.picName}`;
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
            const filePath = `${this.filesConfig.testQuestionFilePath}/${randomFileName}`;
            existingTestQuestion.picName = randomFileName;
            existingTestQuestion.picPath = `/testQuestion/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(picName.buffer);
            fileStream.end();
        }
        const updatedTestQuestion = Object.assign(Object.assign({}, existingTestQuestion), dto);
        await this.repo.save(updatedTestQuestion);
        return updatedTestQuestion;
    }
    async deleteTestQuestion(uuid) {
        if (!Array.isArray(uuid)) {
            uuid = [uuid];
        }
        const testQuestions = await this.repo.find({
            where: { uuid: (0, typeorm_1.In)(uuid) },
        });
        for (const testQuestion of testQuestions) {
            if (testQuestion.picPath) {
                try {
                    const fullPathToDelete = `${this.filesConfig.testQuestionFilePath}/${testQuestion.picName}`;
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
TestQuestionService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(test_question_entity_1.TestQuestion)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(test_entity_1.Test)),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.Repository,
        typeorm_1.Repository])
], TestQuestionService);
exports.TestQuestionService = TestQuestionService;
