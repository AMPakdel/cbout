"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoles = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const role_entity_1 = require("./role.entity");
const user_entity_1 = require("./user.entity");
const base_entity_1 = require("./base.entity");
let UserRoles = class UserRoles extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], UserRoles.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserRoles.prototype, "user_uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserRoles.prototype, "role_uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.user_roles),
    (0, typeorm_1.JoinColumn)({ name: 'user_uuid' }),
    tslib_1.__metadata("design:type", user_entity_1.User)
], UserRoles.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.user_roles),
    (0, typeorm_1.JoinColumn)({ name: 'role_uuid' }),
    tslib_1.__metadata("design:type", role_entity_1.Role)
], UserRoles.prototype, "role", void 0);
UserRoles = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], UserRoles);
exports.UserRoles = UserRoles;
