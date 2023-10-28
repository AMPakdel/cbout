"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const bookmark_controller_1 = require("./bookmark.controller");
const bookmark_service_1 = require("./bookmark.service");
const api_module_1 = require("../api/api.module");
let BookmarkModule = class BookmarkModule {
};
BookmarkModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [api_module_1.ApiModule],
        controllers: [bookmark_controller_1.BookmarkController],
        providers: [bookmark_service_1.BookmarkService],
    })
], BookmarkModule);
exports.BookmarkModule = BookmarkModule;
