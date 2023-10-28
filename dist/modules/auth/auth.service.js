"use strict";
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const guarder_1 = require("nestjs-xion/guarder");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_constant_1 = require("./auth.constant");
const user_service_1 = require("../user/user.service");
const user_entity_1 = require("../../entities/user.entity");
const typeorm_1 = require("typeorm");
const institute_service_1 = require("../institute/institute.service");
const user_token_entity_1 = require("../../entities/user-token.entity");
const typeorm_2 = require("@nestjs/typeorm");
const user_verification_code_entity_1 = require("../../entities/user-verification-code.entity");
const institute_entity_1 = require("../../entities/institute.entity");
let AuthService = AuthService_1 = class AuthService {
    constructor(userTokenRepo, userVerificationCodeRepo, userService, instituteService, jwtService) {
        this.userTokenRepo = userTokenRepo;
        this.userVerificationCodeRepo = userVerificationCodeRepo;
        this.userService = userService;
        this.instituteService = instituteService;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async userLoginWithCode(data) {
        const phoneNumber = data.phoneNumber;
        const generatedCode = '12345';
        let uvcode = this.userVerificationCodeRepo.create({
            phoneNumber,
            code: generatedCode,
            status: user_verification_code_entity_1.VerificationCodeStatus.PENDING,
            generatedAt: new Date(),
        });
        uvcode = await this.userVerificationCodeRepo.save(uvcode);
        this.logger.debug(`phoneNumber [${phoneNumber}] requested logind temp code`);
        return phoneNumber;
    }
    async checkVerificationCode(phoneNumber, code) {
        let uvcode = await this.userVerificationCodeRepo.findOne({
            where: { code, phoneNumber, status: user_verification_code_entity_1.VerificationCodeStatus.PENDING },
        });
        if (!uvcode) {
            throw new common_1.NotFoundException('invalid verification-code');
        }
        const user = await this.userService.findOne({
            where: { phoneNumber },
        });
        if (user) {
            const token = await this.jwtService.signAsync({
                uuid: user.uuid,
                role: user.role,
            });
            await this.createUserToken(user.uuid, token);
            uvcode.status = user_verification_code_entity_1.VerificationCodeStatus.EXPIRED;
            uvcode = await this.userVerificationCodeRepo.save(uvcode);
            this.logger.debug(`User [${user}] logged in`);
            const user_obj = Object.assign({}, user);
            user_obj.role = [user.role];
            delete user_obj.password;
            return {
                shouldRegister: false,
                token,
                user: user_obj,
            };
        }
        else {
            uvcode.status = user_verification_code_entity_1.VerificationCodeStatus.REGISTERING;
            uvcode = await this.userVerificationCodeRepo.save(uvcode);
            return {
                shouldRegister: true,
                token: null,
                user: null,
            };
        }
    }
    async instituteCheckVerificationCode(phoneNumber, code) {
        let uvcode = await this.userVerificationCodeRepo.findOne({
            where: { code, phoneNumber, status: user_verification_code_entity_1.VerificationCodeStatus.PENDING },
        });
        if (!uvcode) {
            throw new common_1.NotFoundException('invalid verification-code');
        }
        const institute = await this.instituteService.findOne({
            where: { phoneNumber },
        });
        if (institute) {
            if (institute.status == institute_entity_1.InstituteStatus.ApprovePending) {
                return {
                    shouldRegister: false,
                    approved: false,
                    token: null,
                    institute: null,
                };
            }
            const token = await this.jwtService.signAsync({
                uuid: institute.uuid,
                role: institute.role,
            });
            await this.createUserToken(institute.uuid, token);
            uvcode.status = user_verification_code_entity_1.VerificationCodeStatus.EXPIRED;
            uvcode = await this.userVerificationCodeRepo.save(uvcode);
            this.logger.debug(`institute [${institute}] logged in`);
            const institute_obj = Object.assign({}, institute);
            institute_obj.role = [institute.role];
            delete institute_obj.password;
            return {
                shouldRegister: false,
                approved: true,
                token,
                institute: institute_obj,
            };
        }
        else {
            uvcode.status = user_verification_code_entity_1.VerificationCodeStatus.REGISTERING;
            uvcode = await this.userVerificationCodeRepo.save(uvcode);
            return {
                shouldRegister: true,
                token: null,
                institute: null,
            };
        }
    }
    async registerInstitute(data) {
        const { phoneNumber, code } = data;
        const uvcode = await this.userVerificationCodeRepo.findOne({
            where: { code, phoneNumber, status: user_verification_code_entity_1.VerificationCodeStatus.REGISTERING },
        });
        if (!uvcode) {
            throw new common_1.NotFoundException('invalid verification-code');
        }
        const institute_data = Object.assign(Object.assign({}, data), { role: user_entity_1.Role.Institute, status: institute_entity_1.InstituteStatus.ApprovePending });
        const institute = await this.instituteService.register(institute_data);
        this.logger.debug(`Institute [${institute}] registered`);
        return {
            approved: false,
        };
    }
    async registerUser(data) {
        const { phoneNumber, code } = data;
        const uvcode = await this.userVerificationCodeRepo.findOne({
            where: { code, phoneNumber, status: user_verification_code_entity_1.VerificationCodeStatus.REGISTERING },
        });
        if (!uvcode) {
            throw new common_1.NotFoundException('invalid verification-code');
        }
        const user_data = Object.assign(Object.assign({}, data), { role: user_entity_1.Role.NormalUser, status: user_entity_1.UserStatus.Approved });
        const user = await this.userService.register(user_data);
        const token = await this.jwtService.signAsync({
            uuid: user.uuid,
            role: user.role,
        });
        await this.createUserToken(user.uuid, token);
        const output_user = Object.assign({}, user);
        output_user.role = [user.role];
        delete output_user.password;
        this.logger.debug(`User [${user}] registered`);
        return {
            token,
            user: output_user,
        };
    }
    async createUserToken(user_id, accessToken) {
        let userToken = await this.userTokenRepo.findOne({ where: { user_id } });
        if (userToken) {
            userToken.accessToken = accessToken;
        }
        else {
            userToken = this.userTokenRepo.create({
                user_id,
                accessToken,
            });
        }
        userToken = await this.userTokenRepo.save(userToken);
        if (userToken) {
            return userToken;
        }
        throw new common_1.BadRequestException('Access Token CRUD Problem');
    }
    async instituteRegisteration(data) {
        this.instituteService.register(data);
    }
    async userRegisteration(data) {
        this.userService.register(data);
    }
    async userSigningIn({ username, password, }) {
        const user = await this.userService.findOne({
            select: [
                'uuid',
                'username',
                'firstname',
                'lastname',
                'status',
                'email',
                'password',
                'acceptTermsConditions',
            ],
            where: { username },
        });
        if ((0, guarder_1.hasValue)(user) && (await user.comparePassword(password))) {
            const token = await this.jwtService.signAsync({
                uuid: user.uuid,
                role: user.role,
            });
            this.logger.debug(`User [${user}] logged in`);
            await this.createUserToken(user.uuid, token);
            const output_user = Object.assign({}, user);
            delete output_user.password;
            return {
                token,
                user: output_user,
            };
        }
        throw new common_1.BadRequestException(auth_constant_1.AuthError.InvalidLoginCredentials);
    }
    async instituteSigningIn({ username, password, }) {
        const institute = await this.instituteService.findOne({
            select: [
                'uuid',
                'username',
                'instituteName',
                'website',
                'status',
                'email',
                'password',
                'acceptTermsConditions',
            ],
            where: { username },
        });
        if ((0, guarder_1.hasValue)(institute) && (await institute.comparePassword(password))) {
            const token = await this.jwtService.signAsync({
                uuid: institute.uuid,
                role: institute.role,
            });
            this.logger.debug(`User [${institute}] logged in`);
            await this.createUserToken(institute.uuid, token);
            const output_user = Object.assign({}, institute);
            delete output_user.password;
            return {
                token,
                user: output_user,
            };
        }
        throw new common_1.BadRequestException(auth_constant_1.AuthError.InvalidLoginCredentials);
    }
    async validateToken(uuid) {
        const user = await this.userService.findOne({
            select: [
                'uuid',
                'username',
                'firstname',
                'lastname',
                'status',
                'email',
                'acceptTermsConditions',
            ],
            where: { uuid },
        });
        if (user) {
            return { token: '', user: user };
        }
        throw new common_1.BadRequestException(auth_constant_1.AuthError.InvalidLoginCredentials);
    }
    async sendVerificationCode(code, phoneNumber) {
        console.log(phoneNumber);
        if (code) {
        }
        else {
        }
    }
    async decodeToken(token) {
        return this.jwtService.verify(token, {
            secret: 'test-secret-key',
        });
    }
    async getUserFromToken(token) {
        try {
            const payload = await this.decodeToken(token);
            const user = await this.userService.findOne({
                select: [
                    'username',
                    'email',
                    'firstname',
                    'lastname',
                    'phoneNumber',
                    'status',
                ],
                where: {
                    uuid: payload.uuid,
                },
            });
            if (user) {
                return user;
            }
            throw new Error('user with such id not found');
        }
        catch (e) {
            const error = e;
            console.log('getUserFromToken error - ', error.message);
            throw new common_1.ForbiddenException(error.message || 'session expired! Please sign In');
        }
    }
};
AuthService = AuthService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_2.InjectRepository)(user_token_entity_1.UserToken)),
    tslib_1.__param(1, (0, typeorm_2.InjectRepository)(user_verification_code_entity_1.UserVerificationCode)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        user_service_1.UserService,
        institute_service_1.InstituteService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
