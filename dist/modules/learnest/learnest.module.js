"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearnestModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const courses_module_1 = require("./courses/courses.module");
const learnest_service_1 = require("./learnest.service");
const learnest_controller_1 = require("./learnest.controller");
const placementTests_module_1 = require("./placementTests/placementTests.module");
const api_module_1 = require("./api/api.module");
const students_module_1 = require("./students/students.module");
const leitners_module_1 = require("./leitners/leitners.module");
const bookmark_module_1 = require("./bookmark/bookmark.module");
const extras_module_1 = require("./extras/extras.module");
const crosswords_module_1 = require("./crosswords/crosswords.module");
let LearnestModule = class LearnestModule {
};
LearnestModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            api_module_1.ApiModule,
            courses_module_1.CoursesModule,
            placementTests_module_1.PlacementTestsModule,
            students_module_1.StudentsModule,
            leitners_module_1.LeitnersModule,
            bookmark_module_1.BookmarkModule,
            extras_module_1.ExtrasModule,
            crosswords_module_1.CrosswordsModule,
        ],
        controllers: [learnest_controller_1.LearnestController],
        providers: [learnest_service_1.LearnestService],
        exports: [learnest_service_1.LearnestService],
    })
], LearnestModule);
exports.LearnestModule = LearnestModule;
