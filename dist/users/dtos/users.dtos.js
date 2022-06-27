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
exports.UpdateUserDto = exports.GetUserDto = exports.CreateUserDto = void 0;
const firestore_1 = require("@google-cloud/firestore");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
CreateUserDto.collectionName = 'users';
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Name of the user` }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "completeName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Displayname of the user` }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "displayName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Langs of the user` }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "languages", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `Techs/cats of the user` }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "categories", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `role of the user` }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `job offers data` }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "jobOffers", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Cover Image/Profile Photo of the user` }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "coverImg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `Web of the user` }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "web", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `LinkedIn of the user` }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "linkedIn", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `email of the user` }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `phone of the user` }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `github of the user` }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "github", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `location of the user` }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `curriculum of the user` }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "curriculum", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Is this  user published?` }),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "published", void 0);
exports.CreateUserDto = CreateUserDto;
class GetUserDto extends CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Date of creation` }),
    __metadata("design:type", firestore_1.Timestamp)
], GetUserDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Date of last update` }),
    __metadata("design:type", firestore_1.Timestamp)
], GetUserDto.prototype, "updatedAt", void 0);
exports.GetUserDto = GetUserDto;
class UpdateUserDto extends (0, swagger_1.PartialType)(GetUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=users.dtos.js.map