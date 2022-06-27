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
exports.UpdateArticlesDto = exports.GetArticlesDto = exports.CreateArticlesDto = void 0;
const firestore_1 = require("@google-cloud/firestore");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateArticlesDto {
}
CreateArticlesDto.collectionName = 'articles';
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateArticlesDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Name of the article` }),
    __metadata("design:type", String)
], CreateArticlesDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Article in html` }),
    __metadata("design:type", String)
], CreateArticlesDto.prototype, "article", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Author of the article` }),
    __metadata("design:type", String)
], CreateArticlesDto.prototype, "author", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Cover Img of the article` }),
    __metadata("design:type", String)
], CreateArticlesDto.prototype, "coverImg", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Description of the article` }),
    __metadata("design:type", String)
], CreateArticlesDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: `Tags/Categories of the article` }),
    __metadata("design:type", Array)
], CreateArticlesDto.prototype, "categories", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Is this  articles published?` }),
    __metadata("design:type", Boolean)
], CreateArticlesDto.prototype, "published", void 0);
exports.CreateArticlesDto = CreateArticlesDto;
class GetArticlesDto extends CreateArticlesDto {
}
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Date of creation` }),
    __metadata("design:type", firestore_1.Timestamp)
], GetArticlesDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `Date of last update` }),
    __metadata("design:type", firestore_1.Timestamp)
], GetArticlesDto.prototype, "updatedAt", void 0);
exports.GetArticlesDto = GetArticlesDto;
class UpdateArticlesDto extends (0, swagger_1.PartialType)(GetArticlesDto) {
}
exports.UpdateArticlesDto = UpdateArticlesDto;
//# sourceMappingURL=articles.dtos.js.map