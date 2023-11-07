"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_controller_1 = require("./course.controller");
const course_service_1 = require("./course.service");
const course_entity_1 = require("../../entities/course.entity");
const courseContent_entity_1 = require("../../entities/courseContent.entity");
const user_entity_1 = require("../../entities/user.entity");
const fileChest_entity_1 = require("../../entities/fileChest.entity");
let CourseModule = class CourseModule {
};
CourseModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([course_entity_1.Course, user_entity_1.User, courseContent_entity_1.CourseContent, fileChest_entity_1.FileChest])],
        controllers: [course_controller_1.CourseController],
        providers: [course_service_1.CourseService],
    })
], CourseModule);
exports.CourseModule = CourseModule;
