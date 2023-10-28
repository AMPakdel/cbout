"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementTestsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const api_module_1 = require("../api/api.module");
const placementTests_controller_1 = require("./placementTests.controller");
const placementTests_service_1 = require("./placementTests.service");
const students_module_1 = require("../students/students.module");
let PlacementTestsModule = class PlacementTestsModule {
};
PlacementTestsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [api_module_1.ApiModule, students_module_1.StudentsModule],
        controllers: [placementTests_controller_1.PlacementTestsController],
        providers: [placementTests_service_1.PlacementTestsService],
    })
], PlacementTestsModule);
exports.PlacementTestsModule = PlacementTestsModule;
