"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const students_service_1 = require("./students.service");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
const students_dto_1 = require("./dto/students.dto");
let StudentsController = class StudentsController {
    constructor(studentsService) {
        this.studentsService = studentsService;
    }
    signup(body) {
        return this.studentsService.signup(body.phone, body.firstname, body.lastname, body.gender);
    }
    login(body) {
        return this.studentsService.login(body.phone);
    }
    verify(body) {
        return this.studentsService.verify(body.phone, body.verification_code);
    }
    information() {
        return this.studentsService.information();
    }
    refreshToken() {
        return this.studentsService.refreshToken();
    }
    updateAvatar(file) {
        return this.studentsService.updateAvatar(file);
    }
    updateProfile(body) {
        return this.studentsService.updateProfile(body);
    }
    dashboard() {
        return this.studentsService.dashboard();
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('/signup'),
    (0, swagger_1.ApiOperation)({ summary: "ثبت نام کاربر" }),
    (0, swagger_1.ApiBody)({ type: students_dto_1.SignupDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [students_dto_1.SignupDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], StudentsController.prototype, "signup", null);
tslib_1.__decorate([
    (0, common_1.Post)('/login'),
    (0, swagger_1.ApiOperation)({ summary: "ورود کاربر" }),
    (0, swagger_1.ApiBody)({ type: students_dto_1.LoginDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [students_dto_1.LoginDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], StudentsController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.Post)('/verify'),
    (0, swagger_1.ApiOperation)({ summary: "تعیین اعتبار توکن احرازهویت" }),
    (0, swagger_1.ApiBody)({ type: students_dto_1.VerifyDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [students_dto_1.VerifyDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], StudentsController.prototype, "verify", null);
tslib_1.__decorate([
    (0, common_1.Get)('/information'),
    (0, swagger_1.ApiOperation)({ summary: "دریافت اطلاعات اپ" }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StudentsController.prototype, "information", null);
tslib_1.__decorate([
    (0, common_1.Post)('/refreshtoken'),
    (0, swagger_1.ApiOperation)({ summary: "ارسال کد تایید شماره موبایل و تکمیل ثبت نام" }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StudentsController.prototype, "refreshToken", null);
tslib_1.__decorate([
    (0, common_1.Post)('/avatar'),
    (0, swagger_1.ApiOperation)({ summary: "ارسال فایل و آپدیت عکس پروفایل" }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (_req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `${uniqueSuffix}${ext}`;
                callback(null, filename);
            },
        }),
    })),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.UploadedFile)('file')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StudentsController.prototype, "updateAvatar", null);
tslib_1.__decorate([
    (0, common_1.Post)('/profile'),
    (0, swagger_1.ApiOperation)({ summary: "ویرایش اطلاعات پروفایل کاربر" }),
    (0, swagger_1.ApiBody)({ type: students_dto_1.UpdateProfileDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [students_dto_1.UpdateProfileDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], StudentsController.prototype, "updateProfile", null);
tslib_1.__decorate([
    (0, common_1.Get)('/dashboard'),
    (0, swagger_1.ApiOperation)({ summary: "دریافت اطلاعات داشبورد کاربر" }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StudentsController.prototype, "dashboard", null);
StudentsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Learnest / Students'),
    (0, common_1.Controller)({ path: '/learnest/student', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [students_service_1.StudentsService])
], StudentsController);
exports.StudentsController = StudentsController;
