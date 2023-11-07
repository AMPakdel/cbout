"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducatorService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const fs = tslib_1.__importStar(require("fs"));
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const _configs_1 = tslib_1.__importDefault(require("../../configs"));
const config_1 = require("nestjs-xion/config");
const academy_entity_1 = require("../../entities/academy.entity");
const user_entity_1 = require("../../entities/user.entity");
const util_1 = require("util");
const user_constant_1 = require("../user/user.constant");
const crypto_1 = require("crypto");
const fileChest_entity_1 = require("../../entities/fileChest.entity");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
const mkdirAsync = (0, util_1.promisify)(fs.mkdir);
let EducatorService = class EducatorService extends crud_1.CRUDService {
    constructor(config, repo, repoUser, repoFileChest) {
        super(repo);
        this.config = config;
        this.repo = repo;
        this.repoUser = repoUser;
        this.repoFileChest = repoFileChest;
        this.filesConfig = this.config.get(_configs_1.default.Files);
        this.ensureDirectoryExists(this.filesConfig.educatorFilePath);
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
    async createEducator(userUuid) {
        const user = await this.repoUser.findOne({
            where: { uuid: userUuid },
            relations: ['academy'],
        });
        if (!user) {
            throw new common_1.BadRequestException(user_constant_1.UserError.UserNotFound);
        }
        const existingacademy = user.academy;
        if (existingacademy) {
            return {
                hasAcademy: true,
                academy: existingacademy,
            };
        }
        else {
            const fileChest = new fileChest_entity_1.FileChest();
            await this.repoFileChest.save(fileChest);
            const academy = new academy_entity_1.Academy();
            academy.status = academy_entity_1.AcademyStatus.FillingInformation;
            academy.step = academy_entity_1.Steps.FirstStep;
            academy.fileChest = fileChest;
            user.academy = academy;
            const createdAcademy = await this.repo.save(academy);
            await this.repoUser.save(user);
            return {
                hasAcademy: false,
                academy: null,
            };
        }
    }
    async createPersonalInfo(userUuid, dto) {
        var _a;
        const user = await this.repoUser.findOne({
            where: { uuid: userUuid },
            relations: ['academy'],
        });
        try {
            if (!user) {
                throw new common_1.BadRequestException(user_constant_1.UserError.UserNotFound);
            }
            const academy = (_a = user.academy) === null || _a === void 0 ? void 0 : _a.uuid;
            if (!academy) {
                throw new common_1.BadRequestException(`Academy not found for the user`);
            }
            if (user.academy) {
                user.academy.step = academy_entity_1.Steps.SecondStep;
                await this.repo.update(academy, dto);
                const updatedAcademy = await this.repo.findOne({
                    where: { uuid: user.academy.uuid },
                });
                return updatedAcademy;
            }
            else {
                throw new common_1.BadRequestException(`Academy not found for the user`);
            }
        }
        catch (e) {
            console.log(e);
            throw new Error(e.message);
        }
    }
    async createBankInfo(userUuid, dto) {
        var _a;
        const user = await this.repoUser.findOne({
            where: { uuid: userUuid },
            relations: ['academy'],
        });
        if (!user) {
            throw new common_1.BadRequestException(user_constant_1.UserError.UserNotFound);
        }
        const academy = (_a = user.academy) === null || _a === void 0 ? void 0 : _a.uuid;
        if (!academy) {
            throw new common_1.BadRequestException(`Academy not found for the user`);
        }
        if (user.academy) {
            user.academy.step = academy_entity_1.Steps.FourthStep;
            await this.repo.update(academy, dto);
            const updatedAcademy = await this.repo.findOne({
                where: { uuid: academy },
            });
            return updatedAcademy;
        }
        else {
            throw new common_1.BadRequestException(`Academy not found for the user`);
        }
    }
    async createTermsAndConditions(userUuid, dto) {
        var _a;
        const user = await this.repoUser.findOne({
            where: { uuid: userUuid },
            relations: ['academy'],
        });
        if (!user) {
            throw new common_1.BadRequestException(user_constant_1.UserError.UserNotFound);
        }
        const academy = (_a = user.academy) === null || _a === void 0 ? void 0 : _a.uuid;
        if (!academy) {
            throw new common_1.BadRequestException(`Academy not found for the user`);
        }
        if (user.academy) {
            user.academy.step = academy_entity_1.Steps.FifthStep;
            await this.repo.update(academy, Object.assign(Object.assign({}, dto), { status: academy_entity_1.AcademyStatus.ApprovePending }));
            const updatedAcademy = await this.repo.findOne({
                where: { uuid: academy },
            });
            return updatedAcademy;
        }
        else {
            throw new common_1.BadRequestException(`Academy not found for the user`);
        }
    }
    async createDocumentInfo(_dto, userUuid, naturalPersonPicName, naturalPersonIDPicName, naturalPersonBookletPicName, legalPersonLogoName, legalPersonCompanyArticle, legalPersonNewsPaper, chairmanIDPicName, chairmanBookletPicName) {
        const user = await this.repoUser.findOne({
            where: { uuid: userUuid },
            relations: ['academy'],
        });
        if (!user) {
            throw new common_1.BadRequestException(user_constant_1.UserError.UserNotFound);
        }
        const academy = user.academy;
        if (!academy) {
            throw new common_1.BadRequestException(`Academy not found for the user`);
        }
        if (user.academy) {
            user.academy.step = academy_entity_1.Steps.ThirdStep;
            if (academy.type === academy_entity_1.Type.LegalPerson) {
                if (!legalPersonLogoName ||
                    !legalPersonCompanyArticle ||
                    !legalPersonNewsPaper ||
                    !chairmanIDPicName ||
                    !chairmanBookletPicName) {
                    throw new common_1.BadRequestException('Required fields for LegalPerson are missing');
                }
            }
            else if (academy.type === academy_entity_1.Type.NaturalPerson) {
                if (!naturalPersonPicName ||
                    !naturalPersonIDPicName ||
                    !naturalPersonBookletPicName) {
                    throw new common_1.BadRequestException('Required fields for NaturalPerson are missing');
                }
            }
            const handleFileUpload = async (file, propertyName, propertyPath) => {
                if (file) {
                    const fileExtension = file.originalname.split('.').pop();
                    const randomBytesLength = 8;
                    const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
                    const randomFileName = `${randomString}.${fileExtension}`;
                    const filePath = `${this.filesConfig.educatorFilePath}/${randomFileName}`;
                    academy[propertyName] = randomFileName;
                    academy[propertyPath] = `/academy/file/${randomFileName}`;
                    const fileStream = fs.createWriteStream(filePath);
                    fileStream.write(file.buffer);
                    fileStream.end();
                }
            };
            handleFileUpload(naturalPersonPicName, 'naturalPersonPicName', 'naturalPersonPicPath');
            handleFileUpload(naturalPersonIDPicName, 'naturalPersonIDPicName', 'naturalPersonIDPicPath');
            handleFileUpload(naturalPersonBookletPicName, 'naturalPersonBookletPicName', 'naturalPersonBookletPicPath');
            handleFileUpload(legalPersonLogoName, 'legalPersonLogoName', 'legalPersonLogoPath');
            handleFileUpload(legalPersonCompanyArticle, 'legalPersonCompanyArticle', 'legalPersonCompanyArticlePath');
            handleFileUpload(legalPersonNewsPaper, 'legalPersonNewsPaper', 'legalPersonNewsPaperPath');
            handleFileUpload(chairmanIDPicName, 'chairmanIDPicName', 'chairmanIDPicPath');
            handleFileUpload(chairmanBookletPicName, 'chairmanBookletPicName', 'chairmanBookletPicPath');
            return await this.repo.save(academy);
        }
        else {
            throw new common_1.BadRequestException(`Academy not found for the user`);
        }
    }
};
EducatorService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(academy_entity_1.Academy)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    tslib_1.__param(3, (0, typeorm_2.InjectRepository)(fileChest_entity_1.FileChest)),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], EducatorService);
exports.EducatorService = EducatorService;
