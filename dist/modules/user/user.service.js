"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = require("tslib");
const crud_1 = require("nestjs-xion/crud");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const crypto_1 = require("crypto");
const user_entity_1 = require("../../entities/user.entity");
const user_roles_entity_1 = require("../../entities/user-roles.entity");
const user_constant_1 = require("./user.constant");
const role_service_1 = require("../role/role.service");
const fs = tslib_1.__importStar(require("fs"));
const util_1 = require("util");
const bcrypt_1 = require("bcrypt");
const role_entity_1 = require("../../entities/role.entity");
const config_test_entity_1 = require("../../entities/config-test.entity");
const answer_entity_1 = require("../../entities/answer.entity");
const user_answers_entity_1 = require("../../entities/user-answers.entity");
const unlinkAsync = (0, util_1.promisify)(fs.unlink);
const mkdirAsync = (0, util_1.promisify)(fs.mkdir);
let UserService = class UserService extends crud_1.CRUDService {
    constructor(repo, repoConfigTest, answerRepository, userAnswerRepository, repoUserRole, repoRole, roleService) {
        super(repo);
        this.repo = repo;
        this.repoConfigTest = repoConfigTest;
        this.answerRepository = answerRepository;
        this.userAnswerRepository = userAnswerRepository;
        this.repoUserRole = repoUserRole;
        this.repoRole = repoRole;
        this.roleService = roleService;
        this.staticFilePath = './uploads/profile';
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
    async create(user_data) {
        if (await this.repo.countBy({ phoneNumber: user_data.phoneNumber })) {
            throw new common_1.BadRequestException(user_constant_1.UserError.ThisMobileAlreadyExists);
        }
        const user = await this.repo.save(this.repo.create(user_data));
        if (user) {
            return user;
        }
        throw new common_1.BadRequestException(user_constant_1.UserError.UserNotFound);
    }
    async update(user) {
        return await this.repo.save(user);
    }
    async register(user_data) {
        try {
            const user = await this.create(user_data);
            return user;
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e.message);
        }
    }
    async findOne(options) {
        return this.repo.findOne(options);
    }
    async getAllUsers(search, sort, filter, page, pageSize) {
        const take = pageSize;
        const skip = (page - 1) * pageSize;
        const users = await this.repo.find({
            select: [
                'createdAt',
                'updatedAt',
                'uuid',
                'status',
                'email',
                'username',
                'firstname',
                'lastname',
                'birthdate',
                'phoneNumber',
                'PhotoName',
                'PhotoPath',
            ],
            relations: ['user_roles'],
            order: { createdAt: 'ASC' },
            skip,
            take,
        });
        let usersWithFullname = await Promise.all(users.map(async (user) => {
            const roles = await this.getRoleTitles(user.user_roles);
            const { user_roles } = user, userWithoutRoles = tslib_1.__rest(user, ["user_roles"]);
            return Object.assign(Object.assign({}, userWithoutRoles), { fullname: `${user.firstname} ${user.lastname}`, roles });
        }));
        if (search) {
            const lowercaseSearch = search.toLowerCase();
            usersWithFullname = usersWithFullname.filter((user) => {
                var _a, _b, _c, _d;
                const fullname = ((_a = user.fullname) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
                const firstname = ((_b = user.firstname) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || '';
                const lastname = ((_c = user.lastname) === null || _c === void 0 ? void 0 : _c.toLowerCase()) || '';
                const phoneNumber = ((_d = user.phoneNumber) === null || _d === void 0 ? void 0 : _d.toLowerCase()) || '';
                return (fullname.includes(lowercaseSearch) ||
                    firstname.includes(lowercaseSearch) ||
                    lastname.includes(lowercaseSearch) ||
                    phoneNumber.includes(lowercaseSearch));
            });
        }
        if (sort) {
            switch (sort) {
                case 'newest':
                    usersWithFullname = usersWithFullname.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
                    break;
                case 'oldest':
                    usersWithFullname = usersWithFullname.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
                    break;
                case 'lastnameAscending':
                    usersWithFullname = usersWithFullname.sort((a, b) => a.lastname.localeCompare(b.lastname));
                    break;
                case 'lastnameDescending':
                    usersWithFullname = usersWithFullname.sort((a, b) => b.lastname.localeCompare(a.lastname));
                    break;
                case 'phoneNumber':
                    usersWithFullname = usersWithFullname.sort((a, b) => a.phoneNumber.localeCompare(b.phoneNumber));
                    break;
                default:
                    throw new common_1.BadRequestException('Invalid sort option');
            }
        }
        if (filter && filter.status) {
            const statusFilter = filter.status;
            usersWithFullname = usersWithFullname.filter((user) => statusFilter.includes(user.status));
        }
        return usersWithFullname;
    }
    async getUser(uuid) {
        const user = await this.repo.findOne({
            where: { uuid },
            relations: {
                user_roles: true,
            },
        });
        if (!user) {
            throw new common_1.BadRequestException(user_constant_1.UserError.UserNotFound);
        }
        const roles = await this.getRoleTitles(user.user_roles);
        const { role, password, user_roles } = user, userWithoutRoleAndPassword = tslib_1.__rest(user, ["role", "password", "user_roles"]);
        const userWithRoles = Object.assign(Object.assign({}, userWithoutRoleAndPassword), { fullname: `${user.firstname} ${user.lastname}`, roles });
        return userWithRoles;
    }
    async updateProfile(uuid, dto, profilePhoto) {
        const existingProfile = await this.findOne({ where: { uuid } });
        if (!existingProfile) {
            throw new common_1.BadRequestException('Profile not found');
        }
        const updatedProfile = Object.assign(Object.assign({}, existingProfile), dto);
        if (dto.password) {
            const salt = await (0, bcrypt_1.genSalt)(10);
            const hashedPassword = await (0, bcrypt_1.hash)(dto.password, salt);
            updatedProfile.password = hashedPassword;
        }
        if (profilePhoto) {
            if (existingProfile.PhotoPath) {
                try {
                    const fullPathToDelete = `${this.staticFilePath}/${existingProfile.PhotoName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting existing file');
                }
            }
            const fileExtension = profilePhoto.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.staticFilePath}/${randomFileName}`;
            updatedProfile.PhotoName = randomFileName;
            updatedProfile.PhotoPath = `/user/profile/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(profilePhoto.buffer);
            fileStream.end();
        }
        await this.repo.update(uuid, updatedProfile);
        return updatedProfile;
    }
    async updateProfileAdminSide(uuid, dto, profilePhoto) {
        const existingProfile = await this.findOne({ where: { uuid } });
        if (!existingProfile) {
            throw new common_1.BadRequestException('Profile not found');
        }
        const updatedProfile = Object.assign(Object.assign({}, existingProfile), dto);
        if (profilePhoto) {
            if (existingProfile.PhotoPath) {
                try {
                    const fullPathToDelete = `${this.staticFilePath}/${existingProfile.PhotoName}`;
                    await unlinkAsync(fullPathToDelete);
                }
                catch (error) {
                    throw new common_1.BadRequestException('Error deleting existing file');
                }
            }
            const fileExtension = profilePhoto.originalname.split('.').pop();
            const randomBytesLength = 8;
            const randomString = (0, crypto_1.randomBytes)(randomBytesLength).toString('hex');
            const randomFileName = `${randomString}.${fileExtension}`;
            const filePath = `${this.staticFilePath}/${randomFileName}`;
            updatedProfile.PhotoName = randomFileName;
            updatedProfile.PhotoPath = `/user/profile/file/${randomFileName}`;
            const fileStream = fs.createWriteStream(filePath);
            fileStream.write(profilePhoto.buffer);
            fileStream.end();
        }
        await this.repo.update(uuid, updatedProfile);
        return updatedProfile;
    }
    async getAllRoles() {
        const roles = await this.repoRole.find({
            select: ['createdAt', 'updatedAt', 'uuid', 'title'],
            order: { updatedAt: 'DESC' },
        });
        return roles;
    }
    async updateUserRoles(userUuid, roleUuids) {
        await this.repoUserRole.delete({ user_uuid: userUuid });
        const userRoles = roleUuids.map((roleUuid) => ({
            user_uuid: userUuid,
            role_uuid: roleUuid,
        }));
        await this.repoUserRole.save(userRoles);
        const user = await this.findOne({
            where: { uuid: userUuid },
            relations: ['user_roles'],
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        const roles = await this.getRoleTitles(user.user_roles);
        const userWithRoles = {
            uuid: user.uuid,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            fullname: `${user.firstname} ${user.lastname}`,
            username: user.username,
            PhotoName: user.PhotoName,
            PhotoPath: user.PhotoPath,
            roles,
        };
        return userWithRoles;
    }
    async getRoleTitles(userRoles) {
        return Promise.all(userRoles.map(async (userRole) => {
            const role = await this.roleService.findOne({
                where: { uuid: userRole.role_uuid },
                select: ['title'],
            });
            return role ? { roleId: userRole.role_uuid, title: role.title } : null;
        })).then((titles) => titles.filter(Boolean));
    }
    async assignAnswerToUser(userUuid, dto) {
        try {
            const { answers, configTestUuid } = dto;
            const user = await this.repo.findOne({ where: { uuid: userUuid } });
            if (!user) {
                throw new common_1.BadRequestException('User not found');
            }
            const configTest = await this.repoConfigTest.findOne({
                where: { uuid: configTestUuid },
            });
            if (!configTest) {
                throw new common_1.BadRequestException('ConfigTest not found');
            }
            if (!user.configTest) {
                user.configTest = [];
            }
            user.configTest.push(configTest);
            user.sendDateUserAnswer = new Date();
            const answerArray = answers;
            for (const questionId in answerArray) {
                const answerId = answers[questionId];
                const answerIds = Array.isArray(answerId) ? answerId : [answerId];
                for (const answerId of answerIds) {
                    const answer = await this.answerRepository.findOne({
                        where: { uuid: answerId },
                    });
                    if (!answer) {
                        throw new common_1.NotFoundException(`Answer not found for question ID: ${questionId}`);
                    }
                }
                const userAnswer = new user_answers_entity_1.UserAnswers();
                userAnswer.user = user;
                userAnswer.answer_uuid = answerIds;
                await this.userAnswerRepository.save(userAnswer);
            }
            await this.repo.save(user);
        }
        catch (error) {
            console.error('An error occurred:', error);
            throw new common_1.BadRequestException('An error occurred while processing the request');
        }
    }
};
UserService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(config_test_entity_1.ConfigTest)),
    tslib_1.__param(2, (0, typeorm_2.InjectRepository)(answer_entity_1.Answer)),
    tslib_1.__param(3, (0, typeorm_2.InjectRepository)(user_answers_entity_1.UserAnswers)),
    tslib_1.__param(4, (0, typeorm_2.InjectRepository)(user_roles_entity_1.UserRoles)),
    tslib_1.__param(5, (0, typeorm_2.InjectRepository)(role_entity_1.Role)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        role_service_1.RoleService])
], UserService);
exports.UserService = UserService;
