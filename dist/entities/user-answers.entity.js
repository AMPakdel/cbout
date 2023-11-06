"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAnswers = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const answer_entity_1 = require("./answer.entity");
const user_entity_1 = require("./user.entity");
const base_entity_1 = require("./base.entity");
let UserAnswers = class UserAnswers extends base_entity_1.Base {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], UserAnswers.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserAnswers.prototype, "user_uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserAnswers.prototype, "answer_uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.user_answers),
    (0, typeorm_1.JoinColumn)({ name: 'user_uuid' }),
    tslib_1.__metadata("design:type", user_entity_1.User)
], UserAnswers.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => answer_entity_1.Answer, (answer) => answer.user_answers),
    (0, typeorm_1.JoinColumn)({ name: 'answer_uuid' }),
    tslib_1.__metadata("design:type", answer_entity_1.Answer)
], UserAnswers.prototype, "answer", void 0);
UserAnswers = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], UserAnswers);
exports.UserAnswers = UserAnswers;
