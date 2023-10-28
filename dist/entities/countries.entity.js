"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Countries = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Countries = class Countries {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Countries.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Countries.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Countries.prototype, "slug", void 0);
Countries = tslib_1.__decorate([
    (0, typeorm_1.Entity)('list_countries')
], Countries);
exports.Countries = Countries;
