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
exports.UpdateCompanyDto = exports.GetCompanyDto = exports.CreateCompanyDto = void 0;
const firestore_1 = require("@google-cloud/firestore");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCompanyDto {
}
CreateCompanyDto.collectionName = 'companies';
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Name of the company` }),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Description of the company` }),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Cover Image/Logo of the company` }),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "coverImg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `Web of the company` }),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "web", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `LinkedIn of the company` }),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "linkedIn", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `email of the company` }),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `phone of the company` }),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `country of the company` }),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Owners of the company` }),
    __metadata("design:type", Array)
], CreateCompanyDto.prototype, "owners", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Is this  company published?` }),
    __metadata("design:type", Boolean)
], CreateCompanyDto.prototype, "published", void 0);
exports.CreateCompanyDto = CreateCompanyDto;
class GetCompanyDto extends CreateCompanyDto {
}
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Date of creation` }),
    __metadata("design:type", firestore_1.Timestamp)
], GetCompanyDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Date of last update` }),
    __metadata("design:type", firestore_1.Timestamp)
], GetCompanyDto.prototype, "updatedAt", void 0);
exports.GetCompanyDto = GetCompanyDto;
class UpdateCompanyDto extends (0, swagger_1.PartialType)(GetCompanyDto) {
}
exports.UpdateCompanyDto = UpdateCompanyDto;
//# sourceMappingURL=companies.dtos.js.map