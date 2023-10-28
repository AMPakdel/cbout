"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonPlanModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lessonPlan_controller_1 = require("./lessonPlan.controller");
const lessonPlan_service_1 = require("./lessonPlan.service");
const products_entity_1 = require("./../../entities/products.entity");
const lessonPlan_entity_1 = require("../../entities/lessonPlan.entity");
let LessonPlanModule = class LessonPlanModule {
};
LessonPlanModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lessonPlan_entity_1.LessonPlan, products_entity_1.Products])],
        controllers: [lessonPlan_controller_1.LessonPlanController],
        providers: [lessonPlan_service_1.LessonPlanService],
    })
], LessonPlanModule);
exports.LessonPlanModule = LessonPlanModule;
