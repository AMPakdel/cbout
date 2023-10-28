"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const students_controller_1 = require("./students.controller");
const students_service_1 = require("./students.service");
const api_module_1 = require("../api/api.module");
let StudentsModule = class StudentsModule {
};
StudentsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [api_module_1.ApiModule],
        controllers: [students_controller_1.StudentsController],
        providers: [students_service_1.StudentsService],
        exports: [students_service_1.StudentsService]
    })
], StudentsModule);
exports.StudentsModule = StudentsModule;
