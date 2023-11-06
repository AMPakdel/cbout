"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGetInstituteGuard = void 0;
const tslib_1 = require("tslib");
const user_entity_1 = require("../../../entities/user.entity");
const institute_service_1 = require("../../institute/institute.service");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let JwtGetInstituteGuard = class JwtGetInstituteGuard {
    constructor(instituteService) {
        this.instituteService = instituteService;
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
            if (!payload.role.includes(user_entity_1.Role.NormalUser)) {
                throw new common_1.UnauthorizedException('Permission denied');
            }
            const institute = await this.instituteService.findOne({
                where: { uuid: payload.uuid },
                relations: ['publication'],
            });
            if (!institute) {
                throw new common_1.UnauthorizedException('institute not found');
            }
            const institute_obj = Object.assign({}, institute);
            institute_obj.role = [institute.role];
            delete institute_obj.password;
            delete institute_obj.updatedAt;
            req.institute = institute_obj;
            return true;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('invalid token');
        }
    }
};
JwtGetInstituteGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [institute_service_1.InstituteService])
], JwtGetInstituteGuard);
exports.JwtGetInstituteGuard = JwtGetInstituteGuard;
