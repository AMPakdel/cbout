"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const publications_controller_1 = require("./publications.controller");
const publications_service_1 = require("./publications.service");
const publications_entity_1 = require("../../entities/publications.entity");
const classification_entity_1 = require("../../entities/classification.entity");
let PublicationModule = class PublicationModule {
};
PublicationModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([publications_entity_1.Publications, classification_entity_1.Classification])],
        controllers: [publications_controller_1.PublicationController],
        providers: [publications_service_1.PublicationService],
    })
], PublicationModule);
exports.PublicationModule = PublicationModule;
