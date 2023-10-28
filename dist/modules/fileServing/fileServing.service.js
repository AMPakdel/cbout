"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileServingService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const mime_types_1 = tslib_1.__importDefault(require("mime-types"));
let FileServingService = class FileServingService {
    serveFile(res, type, name) {
        const filePath = (0, path_1.join)(process.cwd(), 'uploads', type, name);
        try {
            const fileStream = (0, fs_1.createReadStream)(filePath);
            const file_mime = mime_types_1.default.lookup(name);
            if (file_mime) {
                res.contentType(file_mime);
            }
            res.set({
                'Content-Disposition': 'inline',
            });
            return new common_1.StreamableFile(fileStream);
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
};
FileServingService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FileServingService);
exports.FileServingService = FileServingService;
