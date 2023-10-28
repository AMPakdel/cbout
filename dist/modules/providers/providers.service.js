"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersService = void 0;
const tslib_1 = require("tslib");
const _configs_1 = tslib_1.__importDefault(require("../../configs"));
const common_1 = require("@nestjs/common");
const config_1 = require("nestjs-xion/config");
let ProvidersService = class ProvidersService {
    constructor(config) {
        this.config = config;
        this.config.get(_configs_1.default.Learnest);
    }
    getConfigs() {
        return {
            version: 1,
            providers: {
                "academy-hamrahe-aval": {
                    privateCDN: "",
                    publicCDN: "https://test-cipherland.ir/providerss-statics/academy-hamrahe-aval"
                },
                "learnest": {
                    privateCDN: this.config.get(_configs_1.default.Learnest).dlhost,
                    publicCDN: "https://test-cipherland.ir/providers-statics/learnest"
                },
            }
        };
    }
};
ProvidersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService])
], ProvidersService);
exports.ProvidersService = ProvidersService;
