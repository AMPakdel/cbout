"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstituteOwner = exports.InstituteStatus = void 0;
const tslib_1 = require("tslib");
const bcrypt_1 = require("bcrypt");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const app_constant_1 = require("../app/app.constant");
const classification_entity_1 = require("./classification.entity");
const publications_entity_1 = require("./publications.entity");
var InstituteStatus;
(function (InstituteStatus) {
    InstituteStatus["ApprovePending"] = "APPROVE_PENDING";
    InstituteStatus["Approved"] = "APPROVED";
    InstituteStatus["Banned"] = "BANNED";
})(InstituteStatus = exports.InstituteStatus || (exports.InstituteStatus = {}));
let InstituteOwner = class InstituteOwner extends base_entity_1.Base {
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
], InstituteOwner.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], InstituteOwner.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], InstituteOwner.prototype, "role", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], InstituteOwner.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], InstituteOwner.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], InstituteOwner.prototype, "instituteName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], InstituteOwner.prototype, "province_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    tslib_1.__metadata("design:type", String)
], InstituteOwner.prototype, "address", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], InstituteOwner.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    tslib_1.__metadata("design:type", String)
], InstituteOwner.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], InstituteOwner.prototype, "website", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], InstituteOwner.prototype, "acceptTermsConditions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ enum: InstituteStatus, default: InstituteStatus.ApprovePending }),
    tslib_1.__metadata("design:type", String)
], InstituteOwner.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => classification_entity_1.Classification, (classification) => classification.products),
    (0, typeorm_1.JoinColumn)({ name: 'classification_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", classification_entity_1.Classification)
], InstituteOwner.prototype, "classification", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => publications_entity_1.Publications, (publication) => publication.instituteOwner),
    (0, typeorm_1.JoinColumn)({ name: 'publication_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", publications_entity_1.Publications)
], InstituteOwner.prototype, "publication", void 0);
tslib_1.__decorate([
    (0, typeorm_1.BeforeInsert)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], InstituteOwner.prototype, "hashPassword", null);
InstituteOwner = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], InstituteOwner);
exports.InstituteOwner = InstituteOwner;
