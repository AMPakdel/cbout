"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseFileDTO = exports.CourseMessagesDTO = exports.CoursePricingDTO = exports.CourseLandingPageDTO = exports.TopicsAndSessionsDTO = exports.TopicSessionDTO = exports.TopicItemDTO = exports.ContentDTO = exports.CombinedCourseAudienceDTO = exports.CourseAudienceDTO = exports.CreateSubjectDTO = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateSubjectDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, categoryLevelOne: { required: true, type: () => Number }, categoryLevelTwo: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Your Course Title' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateSubjectDTO.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Number)
], CreateSubjectDTO.prototype, "categoryLevelOne", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Number)
], CreateSubjectDTO.prototype, "categoryLevelTwo", void 0);
exports.CreateSubjectDTO = CreateSubjectDTO;
class CourseAudienceDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { index: { required: true, type: () => Number }, title: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    tslib_1.__metadata("design:type", Number)
], CourseAudienceDTO.prototype, "index", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CourseAudienceDTO.prototype, "title", void 0);
exports.CourseAudienceDTO = CourseAudienceDTO;
class CombinedCourseAudienceDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { courseObjectives: { required: false, type: () => [require("./course.dto").CourseAudienceDTO], nullable: true }, courseRequirements: { required: false, type: () => [require("./course.dto").CourseAudienceDTO], nullable: true }, courseBestMajors: { required: false, type: () => [require("./course.dto").CourseAudienceDTO], nullable: true } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        type: [CourseAudienceDTO],
        example: [
            {
                index: 0,
                title: 'Title 1',
            },
            {
                index: 1,
                title: 'Title 2',
            },
        ],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => CourseAudienceDTO),
    (0, class_validator_1.ValidateNested)({ each: true }),
    tslib_1.__metadata("design:type", Object)
], CombinedCourseAudienceDTO.prototype, "courseObjectives", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        type: [CourseAudienceDTO],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => CourseAudienceDTO),
    (0, class_validator_1.ValidateNested)({ each: true }),
    tslib_1.__metadata("design:type", Object)
], CombinedCourseAudienceDTO.prototype, "courseRequirements", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        type: [CourseAudienceDTO],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => CourseAudienceDTO),
    (0, class_validator_1.ValidateNested)({ each: true }),
    tslib_1.__metadata("design:type", Object)
], CombinedCourseAudienceDTO.prototype, "courseBestMajors", void 0);
exports.CombinedCourseAudienceDTO = CombinedCourseAudienceDTO;
class ContentDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { uuid: { required: true, type: () => String }, type: { required: true, type: () => String }, name: { required: true, type: () => String }, createdAt: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: '3423-4j2-k34j-234k234' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ContentDTO.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'video' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ContentDTO.prototype, "type", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'install_python.mp4' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ContentDTO.prototype, "name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-01-15T12:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ContentDTO.prototype, "createdAt", void 0);
exports.ContentDTO = ContentDTO;
class TopicItemDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { index: { required: true, type: () => Number }, title: { required: true, type: () => String }, content: { required: true, type: () => require("./course.dto").ContentDTO } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    tslib_1.__metadata("design:type", Number)
], TopicItemDTO.prototype, "index", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Item Title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], TopicItemDTO.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: ContentDTO }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ContentDTO),
    tslib_1.__metadata("design:type", ContentDTO)
], TopicItemDTO.prototype, "content", void 0);
exports.TopicItemDTO = TopicItemDTO;
class TopicSessionDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { index: { required: true, type: () => Number }, title: { required: true, type: () => String }, items: { required: true, type: () => [require("./course.dto").TopicItemDTO] } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    tslib_1.__metadata("design:type", Number)
], TopicSessionDTO.prototype, "index", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Session Title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], TopicSessionDTO.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: [TopicItemDTO] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => TopicItemDTO),
    tslib_1.__metadata("design:type", Array)
], TopicSessionDTO.prototype, "items", void 0);
exports.TopicSessionDTO = TopicSessionDTO;
class TopicsAndSessionsDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { topicsAndSessions: { required: true, type: () => [require("./course.dto").TopicSessionDTO] } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ type: [TopicSessionDTO] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => TopicSessionDTO),
    tslib_1.__metadata("design:type", Array)
], TopicsAndSessionsDTO.prototype, "topicsAndSessions", void 0);
exports.TopicsAndSessionsDTO = TopicsAndSessionsDTO;
class CourseLandingPageDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { briefDescription: { required: true, type: () => String, minLength: 100, maxLength: 10535 }, immenseDescription: { required: true, type: () => String, minLength: 100, maxLength: 10535 } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Brief description of the course' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(100),
    (0, class_validator_1.MaxLength)(10535),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CourseLandingPageDTO.prototype, "briefDescription", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Immense description of the course' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(100),
    (0, class_validator_1.MaxLength)(10535),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CourseLandingPageDTO.prototype, "immenseDescription", void 0);
exports.CourseLandingPageDTO = CourseLandingPageDTO;
class CoursePricingDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { basePrice: { required: true, type: () => Number }, discountActivation: { required: true, type: () => Boolean }, discountDueDate: { required: true, type: () => String }, discountStartDate: { required: true, type: () => String }, discountPrice: { required: true, type: () => Number } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 99.99 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Number)
], CoursePricingDTO.prototype, "basePrice", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], CoursePricingDTO.prototype, "discountActivation", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-01-15T12:00:00Z' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CoursePricingDTO.prototype, "discountDueDate", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-01-01T12:00:00Z' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CoursePricingDTO.prototype, "discountStartDate", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 79.99 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Number)
], CoursePricingDTO.prototype, "discountPrice", void 0);
exports.CoursePricingDTO = CoursePricingDTO;
class CourseMessagesDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { messagePurchase: { required: true, type: () => String, minLength: 100, maxLength: 10535 }, messageCourseCompletion: { required: true, type: () => String, minLength: 100, maxLength: 10535 } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Thank you for your purchase!' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(100),
    (0, class_validator_1.MaxLength)(10535),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CourseMessagesDTO.prototype, "messagePurchase", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Congratulations on completing the course!' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(100),
    (0, class_validator_1.MaxLength)(10535),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CourseMessagesDTO.prototype, "messageCourseCompletion", void 0);
exports.CourseMessagesDTO = CourseMessagesDTO;
class CourseFileDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { fileName: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'file.pdf', description: 'Name of the file' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CourseFileDTO.prototype, "fileName", void 0);
exports.CourseFileDTO = CourseFileDTO;
