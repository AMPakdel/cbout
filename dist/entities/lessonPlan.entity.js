"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonPlan = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const products_entity_1 = require("./products.entity");
let LessonPlan = class LessonPlan extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], LessonPlan.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], LessonPlan.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], LessonPlan.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], LessonPlan.prototype, "contentName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], LessonPlan.prototype, "contentPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => products_entity_1.Products, (product) => product.lessonPlans, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'product_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", products_entity_1.Products)
], LessonPlan.prototype, "product", void 0);
LessonPlan = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], LessonPlan);
exports.LessonPlan = LessonPlan;
