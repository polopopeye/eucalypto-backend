import { CreateOffersDto } from 'src/offers/dtos/offers.dtos';

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions';

export const FirestoreCollectionProviders: string[] = [
  CreateOffersDto.collectionName,
];
