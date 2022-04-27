import { CreateCategoriesDto } from 'src/categories/dtos/categories.dtos';
import { CreateCompanyDto } from 'src/companies/dtos/companies.dtos';
import { CreateEventsDto } from 'src/community/events/dtos/events.dtos';
import { CreateOffersDto } from 'src/offers/dtos/offers.dtos';
import { CreateArticlesDto } from 'src/community/articles/dtos/articles.dtos';

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions';

export const FirestoreCollectionProviders: string[] = [
  CreateOffersDto.collectionName,
  CreateEventsDto.collectionName,
  CreateCategoriesDto.collectionName,
  CreateCompanyDto.collectionName,
  CreateArticlesDto.collectionName,
];
