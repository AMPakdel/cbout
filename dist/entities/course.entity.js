"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = exports.Steps = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_entity_1 = require("./user.entity");
var Steps;
(function (Steps) {
    Steps["Completed"] = "Completed";
    Steps["Ongoing"] = "Ongoing";
})(Steps = exports.Steps || (exports.Steps = {}));
let Course = class Course extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Object)
], Course.prototype, "steps", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Course.prototype, "categoryLevelOne", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Course.prototype, "categoryLevelTwo", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Object)
], Course.prototype, "courseObjectives", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Object)
], Course.prototype, "courseRequirements", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Object)
], Course.prototype, "courseBestMajors", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Object)
], Course.prototype, "topicsAndSessions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "briefDescription", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "immenseDescription", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "coverPicName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "coverPicPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "advVideoName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "advVideoPath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Course.prototype, "basePrice", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Course.prototype, "discountActivation", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "discountDueDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "discountStartDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Course.prototype, "discountPrice", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "messagePurchase", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "messageCourseCompletion", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Course.prototype, "released", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.courses),
    (0, typeorm_1.JoinColumn)({ name: 'user_uuid', referencedColumnName: 'uuid' }),
    tslib_1.__metadata("design:type", user_entity_1.User)
], Course.prototype, "user", void 0);
Course = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Course);
exports.Course = Course;
