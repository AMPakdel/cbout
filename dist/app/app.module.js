"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = require("tslib");
const config_1 = require("nestjs-xion/config");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_base_controller_1 = require("./app.base.controller");
const _configs_1 = tslib_1.__importDefault(require("../configs"));
const auth_module_1 = require("../modules/auth/auth.module");
const user_module_1 = require("../modules/user/user.module");
const role_module_1 = require("../modules/role/role.module");
const learnest_module_1 = require("../modules/learnest/learnest.module");
const platform_express_1 = require("@nestjs/platform-express");
const providers_module_1 = require("../modules/providers/providers.module");
const ticketing_module_1 = require("../modules/ticketing/ticketing.module");
const basket_module_1 = require("../modules/basket/basket.module");
const classification_module_1 = require("../modules/classification/classification.module");
const publications_module_1 = require("../modules/publications/publications.module");
const country_module_1 = require("../modules/countryCodes/country.module");
const city_module_1 = require("../modules/cityCodes/city.module");
const province_module_1 = require("../modules/provinceCodes/province.module");
const product_module_1 = require("../modules/products/product.module");
const lessonPlan_module_1 = require("../modules/lessonPlan/lessonPlan.module");
const test_module_1 = require("../modules/test/test.module");
const testQuestion_module_1 = require("../modules/testQuestion/testQuestion.module");
const video_module_1 = require("../modules/video/video.module");
const combinedPackage_module_1 = require("../modules/combinedPackage/combinedPackage.module");
const page_module_1 = require("../modules/page/page.module");
const institute_module_1 = require("../modules/institute/institute.module");
const fileServing_module_1 = require("../modules/fileServing/fileServing.module");
const paymentPortal_module_1 = require("../modules/paymentPortal/paymentPortal.module");
const soundTest_module_1 = require("../modules/soundTest/soundTest.module");
const educator_module_1 = require("../modules/educator/educator.module");
const course_module_1 = require("../modules/course/course.module");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (config) => config.get(_configs_1.default.Database),
                inject: [config_1.ConfigService],
            }),
            platform_express_1.MulterModule.register({ dest: './uploads' }),
            fileServing_module_1.FileServingModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            educator_module_1.EducatorModule,
            course_module_1.CourseModule,
            role_module_1.RoleModule,
            ticketing_module_1.TicketingModule,
            basket_module_1.BasketModule,
            institute_module_1.InstituteModule,
            classification_module_1.ClassificationModule,
            publications_module_1.PublicationModule,
            page_module_1.PageModule,
            product_module_1.ProductsModule,
            lessonPlan_module_1.LessonPlanModule,
            test_module_1.TestModule,
            testQuestion_module_1.TestQuestionModule,
            video_module_1.VideoModule,
            soundTest_module_1.SoundTestModule,
            combinedPackage_module_1.CombinedPackageModule,
            country_module_1.CountriesModule,
            province_module_1.ProvincesModule,
            city_module_1.CitiesModule,
            paymentPortal_module_1.paymentPortalModule,
            learnest_module_1.LearnestModule,
            providers_module_1.ProvidersModule,
        ],
        controllers: [app_base_controller_1.AppBaseController],
    })
], AppModule);
exports.AppModule = AppModule;
