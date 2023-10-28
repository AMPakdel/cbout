"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const api_service_1 = require("../api/api.service");
const config_1 = require("nestjs-xion/config");
const _configs_1 = tslib_1.__importDefault(require("../../../configs"));
const api_exeption_1 = require("../api/api.exeption");
const courses_fake_1 = require("./courses.fake");
let CoursesService = class CoursesService {
    constructor(apiService, config) {
        this.apiService = apiService;
        this.config = config;
        this.learnestConfig = this.config.get(_configs_1.default.Learnest);
    }
    async getAll() {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_GetAll);
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const courses = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!courses) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        this.apiService.transformMediaLink(courses, 'imageUrl');
        return courses;
    }
    async details(courseId) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_Details, { courseId });
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        const details = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!details || !details.header) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        this.apiService.transformMediaLink(details.header, 'bannerUrl');
        this.apiService.transformMediaLink(details.introduction, 'imageUrl');
        this.apiService.transformMediaLink(details.introduction, 'videoUrl');
        this.apiService.transformMediaLink(details.refrenceBooks, 'linkUrl');
        this.apiService.transformMediaLink(details.classmates, 'avatarUrl');
        this.apiService.transformMediaLink(details.teacherAssistant, 'imageUrl');
        details.exam['responseTime'] = 10;
        details.exam['totalQuestoins'] = 20;
        details.exam['minimumPercentToQualify'] = 75;
        return details;
    }
    async session(sessionId) {
        var _a, _b;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_Session, { sessionId });
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        const session = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        this.apiService.transformMediaLink(session, 'learningImageUrl');
        return (_b = result.response) === null || _b === void 0 ? void 0 : _b.data;
    }
    async sessionLearning(sessionId) {
        var _a, _b;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_SessionLearning, { sessionId });
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        const sessionLearning = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (sessionLearning) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        this.apiService.transformMediaLink(sessionLearning, 'videoUrl');
        this.apiService.transformMediaLink(sessionLearning, 'subtitleUrl');
        if (Array.isArray(sessionLearning)) {
            sessionLearning.forEach((q) => {
                this.apiService.transformMediaLink(q.questions, 'voiceUrl');
                this.apiService.transformMediaLink(q.questions, 'videoUrl');
                this.apiService.transformMediaLink(q.questions, 'imageUrl');
            });
        }
        return (_b = result.response) === null || _b === void 0 ? void 0 : _b.data;
    }
    async getVocabs(partId) {
        var _a, _b;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_GetVocabs, { partId });
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        const vocabs = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (vocabs) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        this.apiService.transformMediaLink(vocabs, 'imageUrl');
        this.apiService.transformMediaLink(vocabs, 'voiceUrl');
        return (_b = result.response) === null || _b === void 0 ? void 0 : _b.data;
    }
    async getGrammars(partId) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_GetGrammars, { partId });
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async getPartQuestions(partId) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_GetPartQuestions, { partId });
        if (result.error) {
            throw new api_exeption_1.LearnestNotFoundExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async answerToYNBQuestion(value) {
        var _a, _b, _c;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_AnswerToYNBQuestion, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const q_result = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!q_result) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        if (((_b = result.response) === null || _b === void 0 ? void 0 : _b.status) === '1') {
            q_result.correct = true;
        }
        else {
            q_result.correct = false;
        }
        q_result.message = (_c = result.response) === null || _c === void 0 ? void 0 : _c.message;
        return q_result;
    }
    async answerToMultiChoiceQuestion(value) {
        var _a, _b, _c;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_AnswerToMultiChoiceQuestion, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const q_result = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!q_result) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        if (((_b = result.response) === null || _b === void 0 ? void 0 : _b.status) === '1') {
            q_result.correct = true;
        }
        else {
            q_result.correct = false;
        }
        q_result.message = (_c = result.response) === null || _c === void 0 ? void 0 : _c.message;
        return q_result;
    }
    async answerToPhraseQuestion(value) {
        var _a, _b, _c;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_AnswerToPhraseQuestion, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const q_result = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!q_result) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        if (((_b = result.response) === null || _b === void 0 ? void 0 : _b.status) === '1') {
            q_result.correct = true;
        }
        else {
            q_result.correct = false;
        }
        q_result.message = (_c = result.response) === null || _c === void 0 ? void 0 : _c.message;
        return q_result;
    }
    async answerToConversationQuestion(value) {
        var _a, _b, _c;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_AnswerToConversationQuestion, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const q_result = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!q_result) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        if (((_b = result.response) === null || _b === void 0 ? void 0 : _b.status) === '1') {
            q_result.correct = true;
        }
        else {
            q_result.correct = false;
        }
        q_result.message = (_c = result.response) === null || _c === void 0 ? void 0 : _c.message;
        return q_result;
    }
    async buyCourse(value) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_BuyCourse, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async checkGiftCode(giftCode) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_CheckGiftCode, { giftCode });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async checkRefferCode(refferCode) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_CheckRefferCode, { refferCode });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async payCourseFactor(factorId) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_PayCourseFactor, { factorId });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async myClassrooms() {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_MyClassrooms);
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async completeLearning(value) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_CompleteLearning, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async completeSessionPart(value) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_CompleteSessionPart, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async classroomInvitesSentByUser(courseId) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_ClassroomInvitesSentByUser, { courseId });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async classroomInvites(courseId) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_ClassroomInvites, { courseId });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async inviteToCourse(value) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_InviteToCourse, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async inviteToClasssroom(value) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_InviteToClasssroom, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async deleteInviteToClasssroom(value) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_DeleteInviteToClasssroom, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async rejectInviteToClasssroom(value) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_RejectInviteToClasssroom, JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async getQuestion(value) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_GetQuestion, value);
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async suggestedStartDateForCourse(courseId) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_SuggestedStartDateForCourse, { courseId });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async getExam(courseId) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_GetExam, { courseId });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async startExam(examId) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_StartExam, { examId });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        return (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
    }
    async finishExam(examId) {
        var _a;
        const result = await this.apiService.callLearnestApi('post', this.learnestConfig.urls.Courses_FinishExam, { examId });
        if (result.error) {
            throw new api_exeption_1.LearnestServiceErrorExeption(result);
        }
        const finish_result = (_a = result.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!finish_result) {
            throw new api_exeption_1.LearnestUnexpectedResponseExeption(result);
        }
        finish_result.description = courses_fake_1.fake_finish_exam_description;
        return finish_result;
    }
    async getAllQuestionsOfCourse(courseId) {
        const details = await this.details(courseId);
        const list_of_sessions = details.sessions;
        const result = { [courseId]: {} };
        for (const s of list_of_sessions) {
            result[courseId][s.id] = {};
            const session = await this.session(s.id);
            for (const part of session.sessionParts) {
                const questions = await this.getPartQuestions(part.id);
                console.log(part.id);
                result[courseId][s.id][part.id] = { questions };
            }
        }
        return result;
    }
    async getAllQuestionsOfSession(sessionId, questionType) {
        const session = await this.session(sessionId);
        const result = [];
        for (const part of session.sessionParts) {
            try {
                const questions = await this.getPartQuestions(part.id);
                questions.questions.forEach((q) => {
                    if (!questionType) {
                        result.push(q);
                    }
                    else {
                        if (questionType == q.questionType) {
                            result.push(q);
                        }
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        }
        return result;
    }
};
CoursesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [api_service_1.ApiService, config_1.ConfigService])
], CoursesService);
exports.CoursesService = CoursesService;
