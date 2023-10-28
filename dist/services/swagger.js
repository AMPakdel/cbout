"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const swagger_1 = require("nestjs-xion/swagger");
const swagger_2 = require("@nestjs/swagger");
const app_module_1 = require("../app/app.module");
const auth_constant_1 = require("../modules/auth/auth.constant");
const courses_module_1 = require("../modules/learnest/courses/courses.module");
const placementTests_module_1 = require("../modules/learnest/placementTests/placementTests.module");
const students_module_1 = require("../modules/learnest/students/students.module");
const leitners_module_1 = require("../modules/learnest/leitners/leitners.module");
const bookmark_module_1 = require("../modules/learnest/bookmark/bookmark.module");
const extras_module_1 = require("../modules/learnest/extras/extras.module");
const crosswords_module_1 = require("../modules/learnest/crosswords/crosswords.module");
const providers_module_1 = require("../modules/providers/providers.module");
function setup(app, { name }) {
    const config = new swagger_2.DocumentBuilder()
        .setTitle(`${name} APIs`)
        .addBearerAuth({ type: 'http' }, auth_constant_1.AuthStrategy.JWT)
        .addSecurity(auth_constant_1.AuthStrategy.Secret, {
        type: 'apiKey',
        name: auth_constant_1.AuthStrategy.Secret,
        in: 'header',
    });
    swagger_2.SwaggerModule.setup('docs', app, swagger_2.SwaggerModule.createDocument(app, config.build(), {
        include: [
            providers_module_1.ProvidersModule,
            courses_module_1.CoursesModule,
            placementTests_module_1.PlacementTestsModule,
            students_module_1.StudentsModule,
            leitners_module_1.LeitnersModule,
            bookmark_module_1.BookmarkModule,
            extras_module_1.ExtrasModule,
            crosswords_module_1.CrosswordsModule,
            app_module_1.AppModule,
        ],
        deepScanRoutes: true,
    }), Object.assign(Object.assign({}, (0, swagger_1.customOptions)(name)), { swaggerOptions: {
            tagsSorter: 'alpha',
            operationsSorter: 'alpha',
        } }));
}
exports.setup = setup;
