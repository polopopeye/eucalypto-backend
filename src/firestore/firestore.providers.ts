import { TodoDto } from 'src/todos/dtos/todo.document';

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions';
export const FirestoreCollectionProviders: string[] = [TodoDto.collectionName];
