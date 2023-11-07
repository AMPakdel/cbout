"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducatorModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const educator_controller_1 = require("./educator.controller");
const educator_service_1 = require("./educator.service");
const academy_entity_1 = require("../../entities/academy.entity");
const fileChest_entity_1 = require("../../entities/fileChest.entity");
const user_entity_1 = require("../../entities/user.entity");
let EducatorModule = class EducatorModule {
};
EducatorModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([academy_entity_1.Academy, user_entity_1.User, fileChest_entity_1.FileChest])],
        controllers: [educator_controller_1.EducatorController],
        providers: [educator_service_1.EducatorService],
    })
], EducatorModule);
exports.EducatorModule = EducatorModule;
