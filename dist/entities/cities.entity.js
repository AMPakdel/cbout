"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cities = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Cities = class Cities {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Cities.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Cities.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Cities.prototype, "slug", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Cities.prototype, "province_id", void 0);
Cities = tslib_1.__decorate([
    (0, typeorm_1.Entity)('list_cities')
], Cities);
exports.Cities = Cities;
