"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGetUserGuard = void 0;
const tslib_1 = require("tslib");
const user_service_1 = require("../../user/user.service");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let JwtGetUserGuard = class JwtGetUserGuard {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const { authorization } = req.headers;
        if (!authorization || authorization.trim() === '') {
            throw new common_1.UnauthorizedException('Please provide token');
        }
        const authToken = authorization.replace(/bearer/gim, '').trim();
        const jwtService = new jwt_1.JwtService({
            secret: 'test-secret-key',
            signOptions: { expiresIn: '90d' },
        });
        try {
            const payload = jwtService.decode(authToken);
            if (!payload || !payload.uuid || !payload.role) {
                throw new common_1.UnauthorizedException('invalid token');
            }
            const user = await this.usersService.findOne({
                where: { uuid: payload.uuid },
            });
            if (!user) {
                throw new common_1.UnauthorizedException('user not found');
            }
            const user_obj = Object.assign({}, user);
            user_obj.role = [user.role];
            delete user_obj.password;
            delete user_obj.uuid;
            delete user_obj.updatedAt;
            req.user = user_obj;
            return true;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('invalid token');
        }
    }
};
JwtGetUserGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], JwtGetUserGuard);
exports.JwtGetUserGuard = JwtGetUserGuard;
