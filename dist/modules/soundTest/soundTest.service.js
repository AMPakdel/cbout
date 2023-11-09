"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundTestService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const fs = tslib_1.__importStar(require("fs"));
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const _configs_1 = tslib_1.__importDefault(require("../../configs"));
const config_1 = require("nestjs-xion/config");
const user_entity_1 = require("../../entities/user.entity");
const soundTest_entity_1 = require("../../entities/soundTest.entity");
const util_1 = require("util");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
let SoundTestService = class SoundTestService extends crud_1.CRUDService {
    constructor(config, repo, repoUser) {
        super(repo);
        this.config = config;
        this.repo = repo;
        this.repoUser = repoUser;
        this.filesConfig = this.config.get(_configs_1.default.Files);
    }
    async findOne(options) {
        return this.repo.findOne(options);
    }
    async getSoundTest() {
        const allSoundTests = await this.repo.find();
        if (allSoundTests.length === 0) {
            throw new common_1.BadRequestException('No sound tests found');
        }
        const randomSoundTestIndex = Math.floor(Math.random() * allSoundTests.length);
        const randomSoundTest = allSoundTests[randomSoundTestIndex];
        if (!randomSoundTest) {
            throw new common_1.BadRequestException('Failed to retrieve a random sound test');
        }
        const selectedAnimalName = randomSoundTest.script;
        const randomAnimalNames = this.getRandomAnimalNames(selectedAnimalName);
        const { script } = randomSoundTest, soundTestWithoutScript = tslib_1.__rest(randomSoundTest, ["script"]);
        randomAnimalNames.push(selectedAnimalName);
        return {
            soundTest: soundTestWithoutScript,
            animalNames: randomAnimalNames,
        };
    }
    getRandomAnimalNames(selectedAnimalName) {
        const animals = [
            'Lion',
            'Elephant',
            'Horse',
            'Bear',
            'Bird',
            'Cat',
            'Dog',
            'Dolphin',
            'Cow',
            'Wolf',
        ];
        const filteredAnimals = animals.filter((animal) => animal !== selectedAnimalName);
        for (let i = filteredAnimals.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filteredAnimals[i], filteredAnimals[j]] = [
                filteredAnimals[j],
                filteredAnimals[i],
            ];
        }
        return filteredAnimals.slice(0, 2);
    }
    async checkAnswer(soundTestId, userAnswer) {
        const soundTest = await this.repo.findOne({ where: { uuid: soundTestId } });
        if (!soundTest) {
            throw new common_1.BadRequestException('Sound test not found');
        }
        return soundTest.script === userAnswer;
    }
    async incrementAnswerCount(userId, isCorrect) {
        const user = await this.repoUser.findOne({ where: { uuid: userId } });
        if (user) {
            if (isCorrect) {
                user.audioCorrectAnswer++;
            }
            else {
                user.audioWrongAnswer++;
            }
            await this.repoUser.save(user);
        }
    }
    async submitAnswer(userUuid, soundTestId, userAnswer) {
        const isCorrectAnswer = await this.checkAnswer(soundTestId, userAnswer);
        await this.incrementAnswerCount(userUuid, isCorrectAnswer);
        const user = await this.repoUser.findOne({ where: { uuid: userUuid } });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        if (!isCorrectAnswer && user.audioWrongAnswer <= 3) {
            return {
                isCorrectAnswer,
                alloweToTest: false,
                message: 'Your answer is incorrect.',
            };
        }
        if (!isCorrectAnswer && user.audioWrongAnswer > 3) {
            return {
                isCorrectAnswer,
                alloweToTest: false,
                message: 'Support will call you',
            };
        }
        return { isCorrectAnswer, alloweToTest: true };
    }
};
SoundTestService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(soundTest_entity_1.SoundTest)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.Repository,
        typeorm_1.Repository])
], SoundTestService);
exports.SoundTestService = SoundTestService;
