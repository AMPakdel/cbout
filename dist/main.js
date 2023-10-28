"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const config_1 = require("nestjs-xion/config");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const main_response_interceptor_1 = require("./utils/main-response.interceptor");
const app_module_1 = require("./app/app.module");
const _configs_1 = tslib_1.__importDefault(require("./configs"));
const base_exception_filter_1 = require("./utils/base-exception.filter");
const dotenv = tslib_1.__importStar(require("dotenv"));
const path = tslib_1.__importStar(require("path"));
const path_1 = require("path");
async function bootstrap() {
    console.log('NODE_ENV', process.env.NODE_ENV);
    const rootPath = path.resolve(__dirname, '../');
    if (process.env.NODE_ENV !== 'production') {
        dotenv.config({ path: path.join(rootPath, '.env.development') });
    }
    else {
        dotenv.config({ path: path.join(rootPath, '.env.production') });
    }
    console.log('APP_HOST', process.env.APP_HOST);
    console.log('APP_PORT', process.env.APP_PORT);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    const config = app.get(config_1.ConfigService);
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    app.setGlobalPrefix('api');
    const appConf = config.get(_configs_1.default.App);
    const swaggerConf = config.get(_configs_1.default.Swagger);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, whitelist: true }));
    app.useGlobalFilters(new base_exception_filter_1.BaseExceptionFilter());
    app.useGlobalInterceptors(new main_response_interceptor_1.MainResponseInterceptor());
    app.enableCors({
        origin: '*',
    });
    if (swaggerConf.enable) {
        (await Promise.resolve().then(() => tslib_1.__importStar(require('./services/swagger')))).setup(app, appConf);
    }
    await app.startAllMicroservices();
    await app.listen(appConf.port, appConf.host);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
}
bootstrap().catch((error) => {
    throw error;
});
