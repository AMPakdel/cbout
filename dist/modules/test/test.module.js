"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const test_service_1 = require("./test.service");
const test_controller_1 = require("./test.controller");
const products_entity_1 = require("./../../entities/products.entity");
const test_entity_1 = require("../../entities/test.entity");
const test_question_entity_1 = require("../../entities/test-question.entity");
let TestModule = class TestModule {
};
TestModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([products_entity_1.Products, test_entity_1.Test, test_question_entity_1.TestQuestion])],
        controllers: [test_controller_1.TestController],
        providers: [test_service_1.TestService],
    })
], TestModule);
exports.TestModule = TestModule;
