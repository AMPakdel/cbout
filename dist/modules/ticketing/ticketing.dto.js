"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTicketMessageDto = exports.UpdateTicketingDto = exports.CreateTicketingDto = void 0;
const tslib_1 = require("tslib");
const openapi = require("@nestjs/swagger");
const ticketing_entity_1 = require("../../entities/ticketing.entity");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTicketingDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, related: { required: true, type: () => String }, importance: { required: true, enum: require("../../entities/ticketing.entity").Importance }, body: { required: true, type: () => String, nullable: true }, file: { required: true, type: () => Object, nullable: true } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: 'Title' }),
    tslib_1.__metadata("design:type", String)
], CreateTicketingDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: 'Related field' }),
    tslib_1.__metadata("design:type", String)
], CreateTicketingDto.prototype, "related", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(ticketing_entity_1.Importance),
    (0, swagger_1.ApiProperty)({ enum: ticketing_entity_1.Importance, example: ticketing_entity_1.Importance.Low }),
    tslib_1.__metadata("design:type", String)
], CreateTicketingDto.prototype, "importance", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ nullable: true, format: 'text', example: 'Your details' }),
    tslib_1.__metadata("design:type", Object)
], CreateTicketingDto.prototype, "body", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    tslib_1.__metadata("design:type", Object)
], CreateTicketingDto.prototype, "file", void 0);
exports.CreateTicketingDto = CreateTicketingDto;
class UpdateTicketingDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { ticket_uuid: { required: true, type: () => String }, title: { required: true, type: () => String }, related: { required: true, type: () => String }, importance: { required: true, enum: require("../../entities/ticketing.entity").Importance }, body: { required: true, type: () => String, nullable: true }, file: { required: true, type: () => Object, nullable: true } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: 'uuid' }),
    tslib_1.__metadata("design:type", String)
], UpdateTicketingDto.prototype, "ticket_uuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: 'Title' }),
    tslib_1.__metadata("design:type", String)
], UpdateTicketingDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: 'Related field' }),
    tslib_1.__metadata("design:type", String)
], UpdateTicketingDto.prototype, "related", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(ticketing_entity_1.Importance),
    (0, swagger_1.ApiProperty)({ enum: ticketing_entity_1.Importance, example: ticketing_entity_1.Importance.Low }),
    tslib_1.__metadata("design:type", String)
], UpdateTicketingDto.prototype, "importance", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ nullable: true, format: 'text', example: 'Your details' }),
    tslib_1.__metadata("design:type", Object)
], UpdateTicketingDto.prototype, "body", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    tslib_1.__metadata("design:type", Object)
], UpdateTicketingDto.prototype, "file", void 0);
exports.UpdateTicketingDto = UpdateTicketingDto;
class CreateTicketMessageDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { ticket_uuid: { required: true, type: () => String }, body: { required: true, type: () => String }, file: { required: true, type: () => Object } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ format: 'string', example: 'uuid' }),
    tslib_1.__metadata("design:type", String)
], CreateTicketMessageDto.prototype, "ticket_uuid", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ format: 'text', example: 'Your details' }),
    tslib_1.__metadata("design:type", String)
], CreateTicketMessageDto.prototype, "body", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    tslib_1.__metadata("design:type", Object)
], CreateTicketMessageDto.prototype, "file", void 0);
exports.CreateTicketMessageDto = CreateTicketMessageDto;
