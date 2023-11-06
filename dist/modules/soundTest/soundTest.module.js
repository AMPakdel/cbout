"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundTestModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const soundTest_service_1 = require("./soundTest.service");
const soundTest_controller_1 = require("./soundTest.controller");
const soundTest_entity_1 = require("../../entities/soundTest.entity");
const user_entity_1 = require("../../entities/user.entity");
let SoundTestModule = class SoundTestModule {
};
SoundTestModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([soundTest_entity_1.SoundTest, user_entity_1.User])],
        controllers: [soundTest_controller_1.SoundTestController],
        providers: [soundTest_service_1.SoundTestService],
    })
], SoundTestModule);
exports.SoundTestModule = SoundTestModule;
