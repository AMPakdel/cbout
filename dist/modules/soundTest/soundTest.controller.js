"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundTestController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const crud_1 = require("nestjs-xion/crud");
const decorator_1 = require("nestjs-xion/decorator");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_get_payload_guard_1 = require("../auth/guards/jwt-get-payload.guard");
const soundTest_service_1 = require("./soundTest.service");
const soundTest_entity_1 = require("../../entities/soundTest.entity");
const soundTest_dto_1 = require("./soundTest.dto");
let SoundTestController = class SoundTestController {
    constructor(soundTestService) {
        this.soundTestService = soundTestService;
    }
    async getTest() {
        return this.soundTestService.getSoundTest();
    }
    async submitAnswer(req, submitAnswerDto) {
        const userUuid = req.payload.uuid;
        const isCorrectAnswer = await this.soundTestService.checkAnswer(submitAnswerDto.soundTestId, submitAnswerDto.answer);
        await this.soundTestService.incrementAnswerCount(userUuid, isCorrectAnswer);
        return { isCorrectAnswer };
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(crud_1.CRUDInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get a sound test' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SoundTestController.prototype, "getTest", null);
tslib_1.__decorate([
    (0, common_1.Post)('submit-answer'),
    (0, common_1.UseGuards)(jwt_get_payload_guard_1.JwtGetPayloadGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Submit user sound test' }),
    (0, decorator_1.ApiStandardResponse)({ status: common_1.HttpStatus.CREATED, type: soundTest_entity_1.SoundTest }),
    openapi.ApiResponse({ status: 201 }),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, soundTest_dto_1.SubmitAnswerDto]),
    tslib_1.__metadata("design:returntype", Promise)
], SoundTestController.prototype, "submitAnswer", null);
SoundTestController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('SoundTest'),
    (0, common_1.Controller)({ path: '/soundTest', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [soundTest_service_1.SoundTestService])
], SoundTestController);
exports.SoundTestController = SoundTestController;
