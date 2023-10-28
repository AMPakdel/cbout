"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementTestsController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const placementTests_service_1 = require("./placementTests.service");
const start_test_dto_1 = require("./dto/start-test.dto");
const finish_test_dto_1 = require("./dto/finish-test.dto");
const swagger_1 = require("@nestjs/swagger");
let PlacementTestsController = class PlacementTestsController {
    constructor(placementService) {
        this.placementService = placementService;
    }
    getPlacementTest(id) {
        return this.placementService.getPlacementTest(id);
    }
    getAllPlacementTest() {
        return this.placementService.getAllPlacementTest();
    }
    getWithQuestionsPlacementTest(id) {
        return this.placementService.getWithQuestionsPlacementTest(id);
    }
    startTestPlacementTest(body) {
        return this.placementService.startTestPlacementTest(body.id);
    }
    finishTestPlacementTest(body) {
        return this.placementService.finishTestPlacementTest(body);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت اطلاعات یک آزمون تعیین سطح بدون سوالات آن' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], PlacementTestsController.prototype, "getPlacementTest", null);
tslib_1.__decorate([
    (0, common_1.Get)('/all'),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت لیست اطلاعات آزمون های تعیین سطح بدون سوالاتشان' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], PlacementTestsController.prototype, "getAllPlacementTest", null);
tslib_1.__decorate([
    (0, common_1.Get)('/with-questions'),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت اطلاعات یک آزمون تعیین سطح بهمراه سوالات آن' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], PlacementTestsController.prototype, "getWithQuestionsPlacementTest", null);
tslib_1.__decorate([
    (0, common_1.Post)('/start'),
    (0, swagger_1.ApiOperation)({ summary: 'شروع آزمون تعیین سطح و دریافت اطلاعات بهمراه سوالات آن' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [start_test_dto_1.StartTestDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], PlacementTestsController.prototype, "startTestPlacementTest", null);
tslib_1.__decorate([
    (0, common_1.Post)('/finish'),
    (0, swagger_1.ApiOperation)({ summary: 'خاتمه دادن به آزمون تعیین سطح شروع شده و دریافت نتیجه آن' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [finish_test_dto_1.FinishTestDTO]),
    tslib_1.__metadata("design:returntype", void 0)
], PlacementTestsController.prototype, "finishTestPlacementTest", null);
PlacementTestsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Learnest / PlacementTests'),
    (0, common_1.Controller)({ path: '/learnest/placement-test', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [placementTests_service_1.PlacementTestsService])
], PlacementTestsController);
exports.PlacementTestsController = PlacementTestsController;
