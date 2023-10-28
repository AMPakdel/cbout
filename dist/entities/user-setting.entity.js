"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSetting = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let UserSetting = class UserSetting extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], UserSetting.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserSetting.prototype, "customScrollbars", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserSetting.prototype, "direction", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Object)
], UserSetting.prototype, "layout", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Object)
], UserSetting.prototype, "theme", void 0);
UserSetting = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], UserSetting);
exports.UserSetting = UserSetting;
