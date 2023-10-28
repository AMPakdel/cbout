"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const video_controller_1 = require("./video.controller");
const video_service_1 = require("./video.service");
const products_entity_1 = require("./../../entities/products.entity");
const video_entity_1 = require("../../entities/video.entity");
const classification_entity_1 = require("../../entities/classification.entity");
let VideoModule = class VideoModule {
};
VideoModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([video_entity_1.Video, products_entity_1.Products, classification_entity_1.Classification])],
        controllers: [video_controller_1.VideoController],
        providers: [video_service_1.VideoService],
    })
], VideoModule);
exports.VideoModule = VideoModule;
