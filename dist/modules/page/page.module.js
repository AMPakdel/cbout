"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const page_service_1 = require("./page.service");
const page_controller_1 = require("./page.controller");
const page_entity_1 = require("../../entities/page.entity");
const classification_entity_1 = require("../../entities/classification.entity");
const publications_entity_1 = require("../../entities/publications.entity");
let PageModule = class PageModule {
};
PageModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([page_entity_1.Page, classification_entity_1.Classification, publications_entity_1.Publications])],
        controllers: [page_controller_1.PageController],
        providers: [page_service_1.PageService],
    })
], PageModule);
exports.PageModule = PageModule;
