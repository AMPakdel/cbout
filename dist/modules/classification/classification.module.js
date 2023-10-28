"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassificationModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const classification_controller_1 = require("./classification.controller");
const classification_service_1 = require("./classification.service");
const classification_entity_1 = require("../../entities/classification.entity");
let ClassificationModule = class ClassificationModule {
};
ClassificationModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([classification_entity_1.Classification])],
        controllers: [classification_controller_1.ClassificationController],
        providers: [classification_service_1.ClassificationService],
    })
], ClassificationModule);
exports.ClassificationModule = ClassificationModule;
