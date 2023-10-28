"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedPackageModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const combinedPackage_controller_1 = require("./combinedPackage.controller");
const combinedPackage_service_1 = require("./combinedPackage.service");
const products_entity_1 = require("./../../entities/products.entity");
const combinedPackage_entity_1 = require("../../entities/combinedPackage.entity");
const classification_entity_1 = require("../../entities/classification.entity");
const publications_entity_1 = require("../../entities/publications.entity");
let CombinedPackageModule = class CombinedPackageModule {
};
CombinedPackageModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                combinedPackage_entity_1.CombinedPackage,
                products_entity_1.Products,
                classification_entity_1.Classification,
                publications_entity_1.Publications,
            ]),
        ],
        controllers: [combinedPackage_controller_1.CombinedPackageController],
        providers: [combinedPackage_service_1.CombinedPackageService],
    })
], CombinedPackageModule);
exports.CombinedPackageModule = CombinedPackageModule;
