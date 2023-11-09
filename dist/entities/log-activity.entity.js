"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogActivity = exports.LogActions = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_entity_1 = require("./user.entity");
var LogActions;
(function (LogActions) {
    LogActions["ForgetPassword"] = "forget_password";
    LogActions["ResetPassword"] = "reset_password";
    LogActions["LoginWithCode"] = "login-with-code";
    LogActions["Signup"] = "signup";
    LogActions["CheckVerificationCode"] = "check-verification-code";
    LogActions["Logout"] = "logout";
    LogActions["SupportAgency"] = "support_agency";
})(LogActions = exports.LogActions || (exports.LogActions = {}));
let LogActivity = class LogActivity extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], LogActivity.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: LogActions }),
    tslib_1.__metadata("design:type", String)
], LogActivity.prototype, "actions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.logActivity),
    tslib_1.__metadata("design:type", user_entity_1.User)
], LogActivity.prototype, "user", void 0);
LogActivity = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], LogActivity);
exports.LogActivity = LogActivity;
