"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_controller_1 = require("./products.controller");
const products_service_1 = require("./products.service");
const products_entity_1 = require("./../../entities/products.entity");
const classification_entity_1 = require("../../entities/classification.entity");
const lessonPlan_entity_1 = require("../../entities/lessonPlan.entity");
const test_entity_1 = require("../../entities/test.entity");
const test_question_entity_1 = require("../../entities/test-question.entity");
const video_entity_1 = require("../../entities/video.entity");
const combinedPackage_entity_1 = require("../../entities/combinedPackage.entity");
const institute_entity_1 = require("../../entities/institute.entity");
const institute_module_1 = require("../institute/institute.module");
const products_admin_controller_1 = require("./products.admin.controller");
let ProductsModule = class ProductsModule {
};
ProductsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                products_entity_1.Products,
                classification_entity_1.Classification,
                institute_entity_1.InstituteOwner,
                lessonPlan_entity_1.LessonPlan,
                test_entity_1.Test,
                test_question_entity_1.TestQuestion,
                video_entity_1.Video,
                combinedPackage_entity_1.CombinedPackage,
            ]),
            institute_module_1.InstituteModule,
        ],
        controllers: [products_controller_1.ProductsController, products_admin_controller_1.AdminProductsController],
        providers: [products_service_1.ProductsService],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
