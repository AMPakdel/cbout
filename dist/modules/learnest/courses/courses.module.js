"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const courses_service_1 = require("./courses.service");
const courses_controller_1 = require("./courses.controller");
const api_module_1 = require("../api/api.module");
let CoursesModule = class CoursesModule {
};
CoursesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [api_module_1.ApiModule],
        controllers: [courses_controller_1.CoursesController],
        providers: [courses_service_1.CoursesService],
    })
], CoursesModule);
exports.CoursesModule = CoursesModule;
