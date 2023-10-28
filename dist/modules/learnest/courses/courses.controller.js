"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesController = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const courses_service_1 = require("./courses.service");
const swagger_1 = require("@nestjs/swagger");
const answer_to_question_dto_1 = require("./dto/answer-to-question.dto");
const buying_routes_dto_1 = require("./dto/buying-routes.dto");
const exam_routes_dto_1 = require("./dto/exam-routes.dto");
const classroom_routes_dto_1 = require("./dto/classroom-routes.dto");
let CoursesController = class CoursesController {
    constructor(coursesService) {
        this.coursesService = coursesService;
    }
    async details(course_id) {
        return this.coursesService.details(course_id);
    }
    getAll() {
        return this.coursesService.getAll();
    }
    async session(session_id) {
        return this.coursesService.session(session_id);
    }
    async sessionLearning(session_id) {
        return this.coursesService.sessionLearning(session_id);
    }
    async getVocabs(part_id) {
        return this.coursesService.getVocabs(part_id);
    }
    async getGrammars(part_id) {
        return this.coursesService.getGrammars(part_id);
    }
    async getPartQuestions(part_id) {
        return this.coursesService.getPartQuestions(part_id);
    }
    async answerToYNBQuestion(body) {
        return this.coursesService.answerToYNBQuestion(body);
    }
    async answerToMultiChoiceQuestion(body) {
        return this.coursesService.answerToMultiChoiceQuestion(body);
    }
    async answerToPhraseQuestion(body) {
        return this.coursesService.answerToPhraseQuestion(body);
    }
    async answerToConversationQuestion(body) {
        return this.coursesService.answerToConversationQuestion(body);
    }
    async buyCourse(body) {
        return this.coursesService.buyCourse(body);
    }
    async checkGiftCode(body) {
        return this.coursesService.checkGiftCode(body.gift_code);
    }
    async checkRefferCode(body) {
        return this.coursesService.checkRefferCode(body.reffer_code);
    }
    async payCourseFactor(body) {
        return this.coursesService.payCourseFactor(body.factor_id);
    }
    async myClassrooms() {
        return this.coursesService.myClassrooms();
    }
    async completeLearning(body) {
        return this.coursesService.completeLearning(body);
    }
    async completeSessionPart(body) {
        return this.coursesService.completeSessionPart(body);
    }
    async classroomInvitesSentByUser(body) {
        return this.coursesService.classroomInvitesSentByUser(body.courseId);
    }
    async classroomInvites(body) {
        return this.coursesService.classroomInvites(body.courseId);
    }
    async inviteToCourse(body) {
        return this.coursesService.inviteToCourse(body);
    }
    async inviteToClasssroom(body) {
        return this.coursesService.inviteToClasssroom(body);
    }
    async deleteInviteToClasssroom(body) {
        return this.coursesService.deleteInviteToClasssroom(body);
    }
    async rejectInviteToClasssroom(body) {
        return this.coursesService.rejectInviteToClasssroom(body);
    }
    async getQuestion(body) {
        return this.coursesService.getQuestion(body);
    }
    async suggestedStartDateForCourse(body) {
        return this.coursesService.suggestedStartDateForCourse(body.courseId);
    }
    async getExam(course_id) {
        return this.coursesService.getExam(course_id);
    }
    async startExam(body) {
        return this.coursesService.startExam(body.exam_id);
    }
    async finishExam(body) {
        return this.coursesService.finishExam(body.exam_id);
    }
    async getAllQuestionsOfCourse(course_id) {
        return this.coursesService.getAllQuestionsOfCourse(course_id);
    }
    async getAllQuestionsOfSession(session_id, question_type) {
        return this.coursesService.getAllQuestionsOfSession(session_id, question_type);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'دریافت جزئیات یک دوره بهمراه لیست جلسات دوره بدون جزئیات',
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('course_id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "details", null);
tslib_1.__decorate([
    (0, common_1.Get)('/all'),
    (0, swagger_1.ApiOperation)({
        summary: 'لیست تمامی دوره ها بهمراه اطلاعات مورد نیاز برای دسته بندی، بدون جزئیات',
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CoursesController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Get)('/session'),
    (0, swagger_1.ApiOperation)({
        summary: 'دریافت جزئیات یک جلسه از یک دوره غیر از بخش آموزشی آن دوره',
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('session_id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "session", null);
tslib_1.__decorate([
    (0, common_1.Get)('/session/learning'),
    (0, swagger_1.ApiOperation)({
        summary: 'دریافت بخش آموزشی یک دوره، بخش آموزشی از تعدادی ویدیو تشکیل شده که هر ویدیو ممکنه بهمراه خودش تعدادی سوال هم داشته باشه',
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('session_id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "sessionLearning", null);
tslib_1.__decorate([
    (0, common_1.Get)('/session/vocabs'),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت اطلاعات بخش لغات مربوط به یک جلسه' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('part_id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "getVocabs", null);
tslib_1.__decorate([
    (0, common_1.Get)('/session/grammars'),
    (0, swagger_1.ApiOperation)({
        summary: 'دریافت اطلاعات بخش نکات آموزشی و گرامر مربوط به یک جلسه',
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('part_id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "getGrammars", null);
tslib_1.__decorate([
    (0, common_1.Get)('/session/part-questions'),
    (0, swagger_1.ApiOperation)({
        summary: 'دریافت اطلاعات بخش تمرینات تکمیلی مربوط به یک جلسه',
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('part_id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "getPartQuestions", null);
tslib_1.__decorate([
    (0, common_1.Post)('/question/answer-ynb'),
    (0, swagger_1.ApiOperation)({ summary: ' YNB ' + 'جواب به سوالات' }),
    (0, swagger_1.ApiBody)({ type: answer_to_question_dto_1.AnswerToYNBQuestionDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [answer_to_question_dto_1.AnswerToYNBQuestionDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "answerToYNBQuestion", null);
tslib_1.__decorate([
    (0, common_1.Post)('/question/answer-multichoice'),
    (0, swagger_1.ApiOperation)({ summary: ' MultiChoice ' + 'جواب به سوالات' }),
    (0, swagger_1.ApiBody)({ type: answer_to_question_dto_1.AnswerToMultiChoiceQuestionDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [answer_to_question_dto_1.AnswerToMultiChoiceQuestionDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "answerToMultiChoiceQuestion", null);
tslib_1.__decorate([
    (0, common_1.Post)('/question/answer-phrase'),
    (0, swagger_1.ApiOperation)({ summary: ' Phrase ' + 'جواب به سوالات' }),
    (0, swagger_1.ApiBody)({ type: answer_to_question_dto_1.AnswerToPhraseQuestionDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [answer_to_question_dto_1.AnswerToPhraseQuestionDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "answerToPhraseQuestion", null);
tslib_1.__decorate([
    (0, common_1.Post)('/question/answer-conversation'),
    (0, swagger_1.ApiOperation)({ summary: ' conversation ' + 'جواب به سوالات' }),
    (0, swagger_1.ApiBody)({ type: answer_to_question_dto_1.AnswerToConversationQuestionDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [answer_to_question_dto_1.AnswerToConversationQuestionDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "answerToConversationQuestion", null);
tslib_1.__decorate([
    (0, common_1.Post)('/buy'),
    (0, swagger_1.ApiOperation)({
        summary: 'ارسال اطلاعات برای ساخت فاکتور پرداخت جهت خرید یک دوره',
    }),
    (0, swagger_1.ApiBody)({ type: buying_routes_dto_1.BuyCourseDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [buying_routes_dto_1.BuyCourseDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "buyCourse", null);
tslib_1.__decorate([
    (0, common_1.Post)('/check-giftcode'),
    (0, swagger_1.ApiOperation)({
        summary: 'بررسی معتبر کد تخفیف',
    }),
    (0, swagger_1.ApiBody)({ type: buying_routes_dto_1.CheckGiftCodeDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [buying_routes_dto_1.CheckGiftCodeDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "checkGiftCode", null);
tslib_1.__decorate([
    (0, common_1.Post)('/check-reffercode'),
    (0, swagger_1.ApiBody)({ type: buying_routes_dto_1.CheckRefferCodeDTO }),
    (0, swagger_1.ApiOperation)({
        summary: 'بررسی معتبر بودن کد معرف',
    }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [buying_routes_dto_1.CheckRefferCodeDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "checkRefferCode", null);
tslib_1.__decorate([
    (0, common_1.Post)('/pay-course-factor'),
    (0, swagger_1.ApiOperation)({
        summary: 'ارسال شناسه فاکتور و دریافت اطلاعات درگاه پرداخت؟؟؟',
    }),
    (0, swagger_1.ApiBody)({ type: buying_routes_dto_1.PayCourseFactorDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [buying_routes_dto_1.PayCourseFactorDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "payCourseFactor", null);
tslib_1.__decorate([
    (0, common_1.Get)('/myclassrooms'),
    (0, swagger_1.ApiOperation)({
        summary: 'دریافت لیست کلاس های کاربر',
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "myClassrooms", null);
tslib_1.__decorate([
    (0, common_1.Post)('/complete-learning'),
    (0, swagger_1.ApiOperation)({
        summary: 'اتمام بخش های یادگیری یک جلسه',
    }),
    (0, swagger_1.ApiBody)({ type: classroom_routes_dto_1.CompleteLearningDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [classroom_routes_dto_1.CompleteLearningDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "completeLearning", null);
tslib_1.__decorate([
    (0, common_1.Post)('/complete-session-part'),
    (0, swagger_1.ApiOperation)({
        summary: 'اتمام بخش های لغات، گرامر، نکات تکمیلی و ... از یک جلسه',
    }),
    (0, swagger_1.ApiBody)({ type: classroom_routes_dto_1.CompleteSessionPartDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [classroom_routes_dto_1.CompleteSessionPartDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "completeSessionPart", null);
tslib_1.__decorate([
    (0, common_1.Post)('/classroom-invites-sent-by-user'),
    (0, swagger_1.ApiOperation)({
        summary: 'لیست دعوت به کلاس های ارسال شده توسط کاربر',
    }),
    (0, swagger_1.ApiBody)({ type: classroom_routes_dto_1.ClassroomInvitesSentByUserDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [classroom_routes_dto_1.ClassroomInvitesSentByUserDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "classroomInvitesSentByUser", null);
tslib_1.__decorate([
    (0, common_1.Post)('/classroom-invites'),
    (0, swagger_1.ApiOperation)({
        summary: 'لیست دعوت به کلاس های شده به این کاربر توسط سایر کاربران',
    }),
    (0, swagger_1.ApiBody)({ type: classroom_routes_dto_1.ClassroomInvitesDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [classroom_routes_dto_1.ClassroomInvitesDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "classroomInvites", null);
tslib_1.__decorate([
    (0, common_1.Post)('/invite-to-course'),
    (0, swagger_1.ApiOperation)({
        summary: 'ارسال دعوت به دوره',
    }),
    (0, swagger_1.ApiBody)({ type: classroom_routes_dto_1.InviteToCourseDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [classroom_routes_dto_1.InviteToCourseDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "inviteToCourse", null);
tslib_1.__decorate([
    (0, common_1.Post)('/invite-to-classsroom'),
    (0, swagger_1.ApiOperation)({
        summary: 'ارسال دعوت به کلاس',
    }),
    (0, swagger_1.ApiBody)({ type: classroom_routes_dto_1.InviteToClasssroomDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [classroom_routes_dto_1.InviteToClasssroomDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "inviteToClasssroom", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/invite-to-classsroom'),
    (0, swagger_1.ApiOperation)({
        summary: 'حذف دعوت ارسال شده توسط کاربر به کلاس ',
    }),
    (0, swagger_1.ApiBody)({ type: classroom_routes_dto_1.DeleteInviteToClasssroomDTO }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [classroom_routes_dto_1.DeleteInviteToClasssroomDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "deleteInviteToClasssroom", null);
tslib_1.__decorate([
    (0, common_1.Post)('/reject-invite-to-classsroom'),
    (0, swagger_1.ApiOperation)({
        summary: 'رد کردن دعوت دیگران به کلاس',
    }),
    (0, swagger_1.ApiBody)({ type: classroom_routes_dto_1.RejectInviteToClasssroomDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [classroom_routes_dto_1.RejectInviteToClasssroomDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "rejectInviteToClasssroom", null);
tslib_1.__decorate([
    (0, common_1.Post)('/question'),
    (0, swagger_1.ApiOperation)({
        summary: 'دریافت جزئیات یک سوال',
    }),
    (0, swagger_1.ApiBody)({ type: classroom_routes_dto_1.GetQuestionDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [classroom_routes_dto_1.GetQuestionDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "getQuestion", null);
tslib_1.__decorate([
    (0, common_1.Post)('/suggested-start-date-for-course'),
    (0, swagger_1.ApiOperation)({
        summary: 'دریافت لیست روز های پیشنهادی برای شروع یک دوره هنگام خرید آن دوره',
    }),
    (0, swagger_1.ApiBody)({ type: classroom_routes_dto_1.SuggestedStartDateForCourseDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [classroom_routes_dto_1.SuggestedStartDateForCourseDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "suggestedStartDateForCourse", null);
tslib_1.__decorate([
    (0, common_1.Get)('/exam'),
    (0, swagger_1.ApiOperation)({
        summary: 'ایجاد و دریافت یک آزمون پایان دوره',
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('course_id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "getExam", null);
tslib_1.__decorate([
    (0, common_1.Post)('/exam/start'),
    (0, swagger_1.ApiOperation)({
        summary: 'شروع یک آزمون پایان دوره ایجاد شده و دریافت سوال های آن',
    }),
    (0, swagger_1.ApiBody)({ type: exam_routes_dto_1.StartExamDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [exam_routes_dto_1.StartExamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "startExam", null);
tslib_1.__decorate([
    (0, common_1.Post)('/exam/finish'),
    (0, swagger_1.ApiOperation)({
        summary: 'خاتمه دادن به یک آزمون پایان دوره ایجاد شده',
    }),
    (0, swagger_1.ApiBody)({ type: exam_routes_dto_1.FinishExamDTO }),
    openapi.ApiResponse({ status: 201, type: Object }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [exam_routes_dto_1.FinishExamDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "finishExam", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getAllQuestionsOfCourse'),
    (0, swagger_1.ApiExcludeEndpoint)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('course_id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "getAllQuestionsOfCourse", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getAllQuestionsOfSession'),
    (0, swagger_1.ApiExcludeEndpoint)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    tslib_1.__param(0, (0, common_1.Query)('session_id')),
    tslib_1.__param(1, (0, common_1.Query)('question_type')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CoursesController.prototype, "getAllQuestionsOfSession", null);
CoursesController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Learnest / Courses'),
    (0, common_1.Controller)({ path: '/learnest/course', version: '1' }),
    tslib_1.__metadata("design:paramtypes", [courses_service_1.CoursesService])
], CoursesController);
exports.CoursesController = CoursesController;
