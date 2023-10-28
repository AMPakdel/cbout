"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const tslib_1 = require("tslib");
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const mail_constant_1 = require("./mail.constant");
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendEmail({ subject, html, toMail }) {
        try {
            await this.mailerService.sendMail({
                to: toMail,
                subject: subject,
                text: html,
            });
            return true;
        }
        catch (error) {
            console.log(1, error.message);
            console.log(2, error.stack);
            throw new common_1.BadRequestException(mail_constant_1.MailError.MailException);
        }
    }
    async sendTemplateEmail({ subject, html, toMail }) {
        try {
            await this.mailerService.sendMail({
                to: toMail,
                subject: subject,
                html: html,
                template: './job_template',
            });
            return true;
        }
        catch (error) {
            console.log(1, error.message);
            console.log(2, error.stack);
            throw new common_1.BadRequestException(mail_constant_1.MailError.MailException);
        }
    }
    async sendTemplateContextEmail({ subject, template, toMail, context, attachments, }) {
        try {
            await this.mailerService.sendMail({
                to: toMail,
                subject: subject,
                template: template,
                context: context,
                attachments: attachments,
            });
            return true;
        }
        catch (error) {
            console.log(1, error.message);
            console.log(2, error.stack);
            throw new common_1.BadRequestException(mail_constant_1.MailError.MailException);
        }
    }
};
MailService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
exports.MailService = MailService;
