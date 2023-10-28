"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserVerificationCode = exports.VerificationCodeStatus = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
var VerificationCodeStatus;
(function (VerificationCodeStatus) {
    VerificationCodeStatus["PENDING"] = "pending";
    VerificationCodeStatus["REGISTERING"] = "registering";
    VerificationCodeStatus["EXPIRED"] = "expired";
})(VerificationCodeStatus = exports.VerificationCodeStatus || (exports.VerificationCodeStatus = {}));
let UserVerificationCode = class UserVerificationCode extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], UserVerificationCode.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserVerificationCode.prototype, "code", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserVerificationCode.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Date)
], UserVerificationCode.prototype, "generatedAt", void 0);
UserVerificationCode = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], UserVerificationCode);
exports.UserVerificationCode = UserVerificationCode;
