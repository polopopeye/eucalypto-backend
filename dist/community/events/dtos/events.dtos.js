"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventsDto = exports.GetEventsDto = exports.CreateEventsDto = void 0;
const firestore_1 = require("@google-cloud/firestore");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEventsDto {
}
CreateEventsDto.collectionName = 'events';
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Name of the event` }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Organization/Company in charge` }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "organizator", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Location name of the event` }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `state/poblation` }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `Postal Code zip code` }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "ZIPcode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Country name of the offer` }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Cover Img of the event` }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "coverImg", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Description of the event` }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `price of the event` }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `Tags/Categories of the event` }),
    __metadata("design:type", Array)
], CreateEventsDto.prototype, "categories", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `Date of finish` }),
    __metadata("design:type", firestore_1.Timestamp)
], CreateEventsDto.prototype, "endTime", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Date of start` }),
    __metadata("design:type", firestore_1.Timestamp)
], CreateEventsDto.prototype, "iniTime", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Is this  event published?` }),
    __metadata("design:type", Boolean)
], CreateEventsDto.prototype, "published", void 0);
exports.CreateEventsDto = CreateEventsDto;
class GetEventsDto extends CreateEventsDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `Assistants list` }),
    __metadata("design:type", Array)
], GetEventsDto.prototype, "assistants", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Date of creation` }),
    __metadata("design:type", firestore_1.Timestamp)
], GetEventsDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Date of last update` }),
    __metadata("design:type", firestore_1.Timestamp)
], GetEventsDto.prototype, "updatedAt", void 0);
exports.GetEventsDto = GetEventsDto;
class UpdateEventsDto extends (0, swagger_1.PartialType)(GetEventsDto) {
}
exports.UpdateEventsDto = UpdateEventsDto;
//# sourceMappingURL=events.dtos.js.map