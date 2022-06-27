"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreCollectionProviders = exports.FirestoreOptionsProvider = exports.FirestoreDatabaseProvider = void 0;
const categories_dtos_1 = require("../categories/dtos/categories.dtos");
const companies_dtos_1 = require("../companies/dtos/companies.dtos");
const events_dtos_1 = require("../community/events/dtos/events.dtos");
const offers_dtos_1 = require("../offers/dtos/offers.dtos");
const articles_dtos_1 = require("../community/articles/dtos/articles.dtos");
const users_dtos_1 = require("../users/dtos/users.dtos");
const statusOffers_dtos_1 = require("../offers/statusJobOffers/dtos/statusOffers.dtos");
exports.FirestoreDatabaseProvider = 'firestoredb';
exports.FirestoreOptionsProvider = 'firestoreOptions';
exports.FirestoreCollectionProviders = [
    offers_dtos_1.CreateOffersDto.collectionName,
    events_dtos_1.CreateEventsDto.collectionName,
    categories_dtos_1.CreateCategoriesDto.collectionName,
    companies_dtos_1.CreateCompanyDto.collectionName,
    articles_dtos_1.CreateArticlesDto.collectionName,
    users_dtos_1.CreateUserDto.collectionName,
    statusOffers_dtos_1.CreateStatusOffersDto.collectionName,
];
//# sourceMappingURL=firestore.providers.js.map