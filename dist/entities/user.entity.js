"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserStatus = exports.Role = void 0;
const tslib_1 = require("tslib");
const bcrypt_1 = require("bcrypt");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_roles_entity_1 = require("./user-roles.entity");
const app_constant_1 = require("../app/app.constant");
const ticketing_entity_1 = require("./ticketing.entity");
const basket_entity_1 = require("./basket.entity");
const order_entity_1 = require("./order.entity");
const config_test_entity_1 = require("./config-test.entity");
const user_answers_entity_1 = require("./user-answers.entity");
const academy_entity_1 = require("./academy.entity");
var Role;
(function (Role) {
    Role["NormalUser"] = "normalUser";
    Role["Admin"] = "admin";
    Role["SuperAdmin"] = "superAdmin";
})(Role = exports.Role || (exports.Role = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ApprovePending"] = "APPROVE_PENDING";
    UserStatus["Approved"] = "APPROVED";
    UserStatus["Banned"] = "BANNED";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
let User = class User extends base_entity_1.Base {
    async hashPassword() {
        this.password = await (0, bcrypt_1.hash)(this.password, app_constant_1.BCRYPT_SALT_ROUNDS);
    }
    async comparePassword(attempt) {
        return (0, bcrypt_1.compare)(attempt, this.password);
    }
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], User.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "role", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstname", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastname", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "birthdate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "PhotoName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "PhotoPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "country_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "province_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "city_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "favorites", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "acceptTermsConditions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ enum: UserStatus }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "audioCorrectAnswer", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "audioWrongAnswer", void 0);
tslib_1.__decorate([
    (0, typeorm_1.BeforeInsert)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => ticketing_entity_1.Ticketing, (ticketing) => ticketing.user),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "ticketing", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => basket_entity_1.Basket),
    (0, typeorm_1.JoinColumn)({ name: 'basket_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "basket", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.user),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "order", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => user_roles_entity_1.UserRoles, (userRoles) => userRoles.user),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "user_roles", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => config_test_entity_1.ConfigTest, (configTest) => configTest.user),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "configTest", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => user_answers_entity_1.UserAnswers, (userAnswers) => userAnswers.user),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "user_answers", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => academy_entity_1.Academy),
    (0, typeorm_1.JoinColumn)({ name: 'academy_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "academy", void 0);
User = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
