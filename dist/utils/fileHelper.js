"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
class Helper {
    static customFileName(req, file, cb) {
        try {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            let fileExtension = '';
            if (file.mimetype.indexOf('jpeg') > -1) {
                fileExtension = 'jpg';
            }
            else if (file.mimetype.indexOf('png') > -1) {
                fileExtension = 'png';
            }
            else if (file.mimetype.indexOf('pdf') > -1) {
                fileExtension = 'pdf';
            }
            cb(null, uniqueSuffix + '.' + fileExtension);
        }
        catch (error) {
            console.log('req', req === null || req === void 0 ? void 0 : req.body);
        }
    }
    static destinationPath(req, file, cb) {
        try {
            cb(null, './uploads/jobs');
        }
        catch (error) {
            console.log('req', req === null || req === void 0 ? void 0 : req.body);
            console.log('file', file === null || file === void 0 ? void 0 : file.name);
        }
    }
}
exports.Helper = Helper;
