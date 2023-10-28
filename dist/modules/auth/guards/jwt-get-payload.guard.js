"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGetPayloadGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let JwtGetPayloadGuard = class JwtGetPayloadGuard {
    canActivate(context) {
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
            req.payload = {
                uuid: payload.uuid,
                role: payload.role,
            };
            return true;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('invalid token');
        }
    }
};
JwtGetPayloadGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], JwtGetPayloadGuard);
exports.JwtGetPayloadGuard = JwtGetPayloadGuard;
