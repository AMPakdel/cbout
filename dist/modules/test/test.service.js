"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const fs = tslib_1.__importStar(require("fs"));
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const _configs_1 = tslib_1.__importDefault(require("../../configs"));
const config_1 = require("nestjs-xion/config");
const config_test_entity_1 = require("../../entities/config-test.entity");
const products_entity_1 = require("../../entities/products.entity");
const test_question_entity_1 = require("../../entities/test-question.entity");
const util_1 = require("util");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
let TestService = class TestService extends crud_1.CRUDService {
    constructor(config, repo, repoTestQuestion, repoProducts) {
        super(repo);
        this.config = config;
        this.repo = repo;
        this.repoTestQuestion = repoTestQuestion;
        this.repoProducts = repoProducts;
        this.filesConfig = this.config.get(_configs_1.default.Files);
        const ieltsInfoData = fs.readFileSync('src/modules/test/ieltsTestInfo.config.json', 'utf-8');
        this.ieltsInfo = JSON.parse(ieltsInfoData);
    }
    async findOne(options) {
        return this.repo.findOne(options);
    }
    getIELTSInfo() {
        return this.ieltsInfo;
    }
    async getAllTests(request) {
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
                testQuestions: {
                    allow: [
                        'createdAt',
                        'updatedAt',
                        'uuid',
                        'question',
                        'type',
                        'level',
                        'picName',
                        'picPath',
                        'test_uuid',
                    ],
                },
            },
            sort: [{ field: 'createdAt', order: 'DESC' }],
        });
        return { data, total };
    }
    async getTest(uuid) {
        const test = await this.repo.findOne({
            where: { uuid },
            relations: ['product', 'testQuestions', 'testQuestions.answers'],
        });
        if (!test) {
            throw new common_1.BadRequestException('Test not found');
        }
        return test;
    }
    async createTest(dto) {
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
        const test = this.repo.create(Object.assign({}, dto));
        return await this.repo.save(test);
    }
    async updateTest(uuid, dto) {
        if (!dto.title) {
            throw new common_1.BadRequestException('Required fields are missing');
        }
        const existingTest = await this.findOne({
            where: { uuid },
        });
        if (!existingTest) {
            throw new common_1.BadRequestException('Test not found');
        }
        const productUuid = dto.product_uuid;
        const product = await this.repoProducts.findOne({
            where: { uuid: productUuid },
        });
        if (!product) {
            throw new common_1.BadRequestException('Product not found');
        }
        const updatedTest = Object.assign(Object.assign({}, existingTest), dto);
        await this.repo.save(updatedTest);
        return updatedTest;
    }
    async deleteTest(uuid) {
        const test = await this.repo.findOne({
            where: { uuid: uuid },
            relations: ['testQuestions'],
        });
        if (!test) {
            throw new common_1.BadRequestException('Test not found');
        }
        if (test.testQuestions) {
            await this.deleteTestQuestionsWithFiles(uuid);
        }
        return await this.repo.delete(uuid);
    }
    async deleteTestQuestionsWithFiles(testUuid) {
        const test = await this.repo.findOne({
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
};
TestService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(config_test_entity_1.ConfigTest)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(test_question_entity_1.TestQuestion)),
    tslib_1.__param(3, (0, typeorm_2.InjectRepository)(products_entity_1.Products)),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], TestService);
exports.TestService = TestService;
