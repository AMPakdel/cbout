"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provinces = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Provinces = class Provinces {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Provinces.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Provinces.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Provinces.prototype, "slug", void 0);
Provinces = tslib_1.__decorate([
    (0, typeorm_1.Entity)('list_provinces')
], Provinces);
exports.Provinces = Provinces;
