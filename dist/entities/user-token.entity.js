"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserToken = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let UserToken = class UserToken extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], UserToken.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserToken.prototype, "accessToken", void 0);
UserToken = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], UserToken);
exports.UserToken = UserToken;
