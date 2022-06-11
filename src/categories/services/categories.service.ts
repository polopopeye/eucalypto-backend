import { Injectable, Inject } from '@nestjs/common';
import { CollectionReference } from '@google-cloud/firestore';
import {
  CreateCategoriesDto,
  GetCategoriesDto,
  UpdateCategoriesDto,
} from '../dtos/categories.dtos';
import getDataFromQuerySnapsshot from 'src/utils/getDataFromQuerySnapsshot';
import { RedisProvider } from 'src/redisProvider/redis.provider';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(CreateCategoriesDto.collectionName)
    private collection: CollectionReference<CreateCategoriesDto>,
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

    // Delete Redis
    const tableName = this.collection.id;
    await this.redisClient.delete(tableName);

    return offerDoc.data();
  }

  async findAll(): Promise<any[]> {
    const snapshot = await this.collection.get();
    const tableName = this.collection.id;

    const redisData = await this.redisClient.get(tableName);
    if (!redisData) {
      console.log(tableName + ': Served from DB');
      const data = getDataFromQuerySnapsshot(snapshot);
      if (data) this.redisClient.update(tableName, data);
      return data;
    }
    console.log(tableName + ': Served from Redis');
    return redisData;
  }

  async findBy(prop, value): Promise<any[]> {
    const searchById = async () => {
      const docRef: any = await this.collection.doc(value).get();
      if (docRef.exists) {
        return { id: docRef.id, ...docRef.data() };
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
      return getDataFromQuerySnapsshot(snapshot);
    };

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
      // Delete Redis
      const tableName = this.collection.id;
      await this.redisClient.delete(tableName);

      await docRef.update(changes);
      const offerDoc = await docRef.get();
      return offerDoc.data();
    }
    return '🚀 ~ file: offers.service ~ line 89 ~ EventsService ~ update ~ Error';
  }

  async delete(id: string): Promise<any> {
    if (id) {
      // Delete Redis
      const tableName = this.collection.id;
      await this.redisClient.delete(tableName);

      return await this.collection.doc(id).delete();
    } else {
      return (
        '🚀 ~ file: offers.service.ts ~ line 92 ~ EventsService ~ delete ~ id' +
        id
      );
    }
  }
}
