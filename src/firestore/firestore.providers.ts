import { CreateEventsDto } from 'src/events/dtos/events.dtos';
import { CreateOffersDto } from 'src/offers/dtos/offers.dtos';

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions';

export const FirestoreCollectionProviders: string[] = [
  CreateOffersDto.collectionName,
  CreateEventsDto.collectionName,
];
