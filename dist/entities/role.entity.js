"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_roles_entity_1 = require("./user-roles.entity");
let Role = class Role extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => user_roles_entity_1.UserRoles, (userRoles) => userRoles.role, {
        cascade: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Role.prototype, "user_roles", void 0);
Role = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Role);
exports.Role = Role;
