"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const tslib_1 = require("tslib");
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const _configs_1 = tslib_1.__importDefault(require("../../../configs"));
const config_1 = require("nestjs-xion/config");
let ApiService = class ApiService {
    constructor(httpService, config) {
        this.httpService = httpService;
        this.config = config;
        this.learnestConfig = this.config.get(_configs_1.default.Learnest);
    }
    async callLearnestApi(method, url, data, config) {
        var _a, _b, _c, _d, _e, _f;
        const headers = {};
        method = method.toLowerCase();
        if (method === 'post' || method === 'put' || method === 'patch') {
            headers['Content-Type'] = 'multipart/form-data';
        }
        if ((config === null || config === void 0 ? void 0 : config.headers) && (config === null || config === void 0 ? void 0 : config.headers['Content-Type'])) {
            headers['Content-Type'] = config === null || config === void 0 ? void 0 : config.headers['Content-Type'];
        }
        headers['Authorization'] = 'meysam';
        let reqConfig = {};
        if (config) {
            reqConfig = Object.assign({}, config);
        }
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.request(Object.assign(Object.assign({}, reqConfig), { baseURL: (config === null || config === void 0 ? void 0 : config.baseURL) || this.learnestConfig.domain, url,
                method,
                data,
                headers, timeout: (config === null || config === void 0 ? void 0 : config.timeout) || this.learnestConfig.timeout })));
            return {
                status: response.status,
                error: null,
                response: response.data,
            };
        }
        catch (e) {
            const err = e;
            if (((_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) && ((_d = (_c = err.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.errors)) {
                const errors = [err.response.data.message];
                errors.concat(err.response.data.errors);
                err.response.data.errors = errors;
            }
            return {
                status: ((_e = err.response) === null || _e === void 0 ? void 0 : _e.status) || 500,
                error: err.message || 'Internal Error',
                response: ((_f = err.response) === null || _f === void 0 ? void 0 : _f.data) || null,
            };
        }
    }
    createLearestMediaUrl(url) {
        if (typeof url != 'string' || url == '') {
            return '';
        }
        if (url.startsWith('http')) {
            return url;
        }
        if (url.startsWith('/')) {
            return this.learnestConfig.dlhost + url;
        }
        return this.learnestConfig.dlhost + '/' + url;
    }
    transformMediaLink(object, key) {
        if (Array.isArray(object)) {
            object.forEach((el) => {
                if (el[key]) {
                    el[key] = this.createLearestMediaUrl(el[key]);
                }
            });
        }
        else if (object) {
            if (object[key]) {
                object[key] = this.createLearestMediaUrl(object[key]);
            }
        }
    }
};
ApiService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], ApiService);
exports.ApiService = ApiService;
