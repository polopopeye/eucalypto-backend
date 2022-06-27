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
exports.UpdateOffersDto = exports.GetOffersDto = exports.CreateOffersDto = void 0;
const firestore_1 = require("@google-cloud/firestore");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateOffersDto {
}
CreateOffersDto.collectionName = 'offers';
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateOffersDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Company Name of the offer job` }),
    __metadata("design:type", String)
], CreateOffersDto.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Job Offer tittle` }),
    __metadata("design:type", String)
], CreateOffersDto.prototype, "job", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Job Offer tittle` }),
    __metadata("design:type", String)
], CreateOffersDto.prototype, "fulltime", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Location name of the offer` }),
    __metadata("design:type", String)
], CreateOffersDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Is a remote job offer?` }),
    __metadata("design:type", Boolean)
], CreateOffersDto.prototype, "remote", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Description of the job offer` }),
    __metadata("design:type", String)
], CreateOffersDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Salary of the job offer` }),
    __metadata("design:type", String)
], CreateOffersDto.prototype, "salary", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `Techs/Categories of the job offer` }),
    __metadata("design:type", Array)
], CreateOffersDto.prototype, "categories", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Date of deadline` }),
    __metadata("design:type", String)
], CreateOffersDto.prototype, "deadLine", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `Technologies Field Data` }),
    __metadata("design:type", Object)
], CreateOffersDto.prototype, "technologies", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `Is this  job published?` }),
    __metadata("design:type", Boolean)
], CreateOffersDto.prototype, "published", void 0);
exports.CreateOffersDto = CreateOffersDto;
class GetOffersDto extends CreateOffersDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `Applicants list` }),
    __metadata("design:type", Array)
], GetOffersDto.prototype, "applicants", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Date of creation` }),
    __metadata("design:type", firestore_1.Timestamp)
], GetOffersDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Date of last update` }),
    __metadata("design:type", firestore_1.Timestamp)
], GetOffersDto.prototype, "updatedAt", void 0);
exports.GetOffersDto = GetOffersDto;
class UpdateOffersDto extends (0, swagger_1.PartialType)(GetOffersDto) {
}
exports.UpdateOffersDto = UpdateOffersDto;
//# sourceMappingURL=offers.dtos.js.map