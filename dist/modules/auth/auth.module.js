"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const user_module_1 = require("../user/user.module");
const auth_public_controller_1 = require("./auth.public.controller");
const auth_service_1 = require("./auth.service");
const role_module_1 = require("../role/role.module");
const institute_module_1 = require("../institute/institute.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_token_entity_1 = require("../../entities/user-token.entity");
const user_verification_code_entity_1 = require("../../entities/user-verification-code.entity");
const log_activity_entity_1 = require("../../entities/log-activity.entity");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_token_entity_1.UserToken, user_verification_code_entity_1.UserVerificationCode, log_activity_entity_1.LogActivity]),
            user_module_1.UserModule,
            institute_module_1.InstituteModule,
            role_module_1.RoleModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: 'test-secret-key',
                signOptions: { expiresIn: '90d' },
            }),
        ],
        providers: [auth_service_1.AuthService],
        controllers: [auth_public_controller_1.AuthPublicController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
