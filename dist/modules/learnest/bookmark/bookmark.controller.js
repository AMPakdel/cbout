"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const bookmark_service_1 = require("./bookmark.service");
const swagger_1 = require("@nestjs/swagger");
const bookmark_dto_1 = require("./dto/bookmark.dto");
let BookmarkController = class BookmarkController {
    constructor(bookmarkService) {
        this.bookmarkService = bookmarkService;
    }
    bookmarks() {
        return this.bookmarkService.bookmarks();
    }
    questions(bookmark_id) {
        return this.bookmarkService.questions(bookmark_id);
    }
    createBookmark(body) {
        return this.bookmarkService.createBookmark(body.name);
    }
    deleteBookmark(body) {
        return this.bookmarkService.deleteBookmark(body.bookmark_id);
    }
    addQuestion(body) {
        return this.bookmarkService.addQuestion(body);
    }
    deleteQuestion(body) {
        return this.bookmarkService.deleteQuestion(body.question_id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/all'),
    (0, swagger_1.ApiOperation)({ summary: "دریافت لیست نشان ها کاربر" }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], BookmarkController.prototype, "bookmarks", null);
tslib_1.__decorate([
    (0, common_1.Get)('/questions'),
    (0, swagger_1.ApiOperation)({ summary: "دریافت جزئیات یک نشان از جنس سوال" }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('bookmark_id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], BookmarkController.prototype, "questions", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "ایجاد یک نشان برای کاربر" }),
    (0, swagger_1.ApiBody)({ type: bookmark_dto_1.CreateBookmarkDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [bookmark_dto_1.CreateBookmarkDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], BookmarkController.prototype, "createBookmark", null);
tslib_1.__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({ summary: "حذف یک نشان از لیست نشان های کاربر" }),
    (0, swagger_1.ApiBody)({ type: bookmark_dto_1.DeleteBookmarkDTO }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [bookmark_dto_1.DeleteBookmarkDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], BookmarkController.prototype, "deleteBookmark", null);
tslib_1.__decorate([
    (0, common_1.Post)('/question'),
    (0, swagger_1.ApiOperation)({ summary: "اضافه کردن نشان از جنس سوال" }),
    (0, swagger_1.ApiBody)({ type: bookmark_dto_1.AddQuestionDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [bookmark_dto_1.AddQuestionDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], BookmarkController.prototype, "addQuestion", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/question'),
    (0, swagger_1.ApiOperation)({ summary: "حذف یک نشان از جنس سوال از لیست نشان های کاربر" }),
    (0, swagger_1.ApiBody)({ type: bookmark_dto_1.DeleteQuestionDTO }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [bookmark_dto_1.DeleteQuestionDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], BookmarkController.prototype, "deleteQuestion", null);
BookmarkController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Learnest / Bookmark'),
    (0, common_1.Controller)({ path: '/learnest/bookmark', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [bookmark_service_1.BookmarkService])
], BookmarkController);
exports.BookmarkController = BookmarkController;
