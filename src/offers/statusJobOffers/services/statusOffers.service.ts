import { Injectable, Inject } from '@nestjs/common';
import { CollectionReference } from '@google-cloud/firestore';
import {
  CreateStatusOffersDto,
  StatusGetOffersDto,
  StatusUpdateOffersDto,
} from '../dtos/statusOffers.dtos';
import getDataFromQuerySnapsshot from 'src/utils/getDataFromQuerySnapsshot';
import { RedisProvider } from 'src/redisProvider/redis.provider';

@Injectable()
export class StatusOffersService {
  constructor(
    @Inject(CreateStatusOffersDto.collectionName)
    private collection: CollectionReference<CreateStatusOffersDto>,
    private redisClient: RedisProvider,
  ) {}

  async create(Offers): Promise<CreateStatusOffersDto> {
    // Delete Redis
    const tableName = this.collection.id;
    await this.redisClient.delete(tableName);

    const offer: StatusGetOffersDto = {
      ...Offers,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const docRef = this.collection.doc();
    await docRef.set(offer);
    const offerDoc = await docRef.get();
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

  async findBy(userId, jobId): Promise<any[]> {
    const snapshot: any = await this.collection
      .where('idUser', '==', userId)
      .where('idJob', '==', jobId)
      .get();

    if (snapshot.empty) {
      console.log(
        '🚀 ~ file: statusOffers.service.ts ~ line 42 ~ StatusOffersService ~ findBy ~ snapshot.empty',
        snapshot.empty,
      );

      return;
    }
    return getDataFromQuerySnapsshot(snapshot);

    // TODO SEARCH BY PROP AND VALUE - PARAMS
    // async findBy(prop, value): Promise<any[]> {
    //   const searchById = async () => {
    //     const docRef: any = await this.collection.doc(value).get();
    //     if (docRef.exists) {
    //       return { id: docRef.id, ...docRef.data() };
    //     } else {
    //       return false;
    //     }
    //   };
    // const searchByProp = async () => {
    //   value = value === 'true' ? true : value;

    //   const snapshot = await this.collection.where(prop, '==', value).get();
    //   if (snapshot.empty) {
    //     console.log('No matching documents.');
    //     return;
    //   }
    //   return getDataFromQuerySnapsshot(snapshot);
    // };

    // if (prop === 'id') {
    //   return searchById();
    // } else {
    //   return searchByProp();
    // }
  }

  async update(id: string, changes: any): Promise<any> {
    // Delete Redis
    const tableName = this.collection.id;
    await this.redisClient.delete(tableName);

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
      console.log(
        '🚀 ~ file: offers.service.ts ~ line 81 ~ StatusOffersService ~ update ~ changes',
        changes,
      );

      await docRef.update(changes);
      const offerDoc = await docRef.get();
      return offerDoc.data();
    }
    return '🚀 ~ file: offers.service ~ line 89 ~ StatusOffersService ~ update ~ Error';
  }

  async delete(id: string, idJobOffer: string): Promise<any> {
    // Delete Redis
    const tableName = this.collection.id;
    await this.redisClient.delete(tableName);

    if (id && idJobOffer) {
      const snapshot = await this.collection
        .where('idUser', '==', id)
        .where('idJob', '==', idJobOffer)
        .get();

      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }

      snapshot.forEach((doc) => {
        doc.ref.delete();
      });

      return;
    } else {
      return (
        '🚀 ~ file: offers.service.ts ~ line 92 ~ StatusOffersService ~ delete ~ id' +
        id
      );
    }
  }

  async deleteById(id: string): Promise<any> {
    // Delete Redis
    const tableName = this.collection.id;
    await this.redisClient.delete(tableName);

    if (id) {
      return await this.collection.doc(id).delete();
    } else {
      return (
        '🚀 ~ file: users.service.ts ~ line 92 ~ EventsService ~ delete ~ id' +
        id
      );
    }
  }
}
