import { Injectable, Inject } from '@nestjs/common';
import { CollectionReference } from '@google-cloud/firestore';
import {
  CreateCategoriesDto,
  GetCategoriesDto,
  ParentCategoryDto,
  UpdateCategoriesDto,
} from '../dtos/categories.dtos';
import getDataFromQuerySnapsshot from 'src/utils/getDataFromQuerySnapsshot';
import { RedisProvider } from 'src/redisProvider/redis.provider';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(CreateCategoriesDto.collectionName)
    private collection: CollectionReference<CreateCategoriesDto>,
    @Inject(ParentCategoryDto.collectionName)
    private parentCollection: CollectionReference<ParentCategoryDto>,
    private redisClient: RedisProvider,
  ) {}

  async create(events): Promise<CreateCategoriesDto> {
    const offer: GetCategoriesDto = {
      ...events,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const docRef = this.collection.doc();
    await docRef.set(offer);
    const offerDoc = await docRef.get();

    return offerDoc.data();
  }

  async createParent(parentCat): Promise<ParentCategoryDto> {
    const docRef = this.parentCollection.doc();
    await docRef.set(parentCat);
    const offerDoc = await docRef.get();

    return offerDoc.data();
  }

  async findAll(): Promise<any[]> {
    const tableName = this.collection.id;

    console.log(tableName + ': Served from DB');
    const snapshot = await this.collection.get();
    const data = getDataFromQuerySnapsshot(snapshot);
    if (data) this.redisClient.update(tableName, data);
    return data;
  }

  async findAllParent(): Promise<any[]> {
    const tableName = this.parentCollection.id;

    console.log(tableName + ': Served from DB');
    const snapshot = await this.parentCollection.get();
    const data = getDataFromQuerySnapsshot(snapshot);
    if (data) this.redisClient.update(tableName, data);
    return data;
  }

  async findBy(prop, value): Promise<any[]> {
    const tableName = this.collection.id + '_' + prop + '_' + value;

    const searchById = async () => {
      const docRef: any = await this.collection.doc(value).get();
      if (docRef.exists) {
        const data = { id: docRef.id, ...docRef.data() };

        return data;
      } else {
        return false;
      }
    };

    const searchByProp = async () => {
      value = value === 'true' ? true : value;

      const snapshot = await this.collection.where(prop, '==', value).get();
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }
      const data = getDataFromQuerySnapsshot(snapshot);

      return data;
    };

    console.log(tableName + ': Served from DB');
    if (prop === 'id') {
      return searchById();
    } else {
      return searchByProp();
    }
  }

  async update(id: string, changes: UpdateCategoriesDto): Promise<any> {
    const searchById = async () => {
      const doc = this.collection.doc(id);
      const docRef: any = await doc.get();
      if (docRef.exists) {
        return doc;
      } else {
        return null;
      }
    };

    const docRef = await searchById();

    if (docRef && Object.keys(changes).length !== 0) {
      await docRef.update(changes);
      const offerDoc = await docRef.get();
      return offerDoc.data();
    }
    return '🚀 ~ file: offers.service ~ line 89 ~ EventsService ~ update ~ Error';
  }

  async delete(id: string): Promise<any> {
    if (id) {
      return await this.collection.doc(id).delete();
    } else {
      return (
        '🚀 ~ file: offers.service.ts ~ line 92 ~ EventsService ~ delete ~ id' +
        id
      );
    }
  }

  async deleteParent(id: string): Promise<any> {
    if (id) {
      return await this.parentCollection.doc(id).delete();
    } else {
      return (
        '🚀 ~ file: offers.service.ts ~ line 92 ~ EventsService ~ delete ~ id' +
        id
      );
    }
  }
}
