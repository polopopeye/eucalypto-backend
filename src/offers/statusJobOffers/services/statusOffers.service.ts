import { CollectionReference } from '@google-cloud/firestore';
import { Inject, Injectable } from '@nestjs/common';
import { RedisProvider } from 'src/redisProvider/redis.provider';
import getDataFromQuerySnapsshot from 'src/utils/getDataFromQuerySnapsshot';
import {
  CreateStatusOffersDto,
  StatusGetOffersDto,
} from '../dtos/statusOffers.dtos';

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
    const redisKeys = await this.redisClient.getKeysInclude(tableName);
    redisKeys.forEach(async (key) => {
      await this.redisClient.delete(key);
    });

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
    const tableName = this.collection.id;

    console.log(tableName + ': Served from DB');
    const snapshot = await this.collection.get();
    const data = getDataFromQuerySnapsshot(snapshot);

    return data;
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
  }

  async update(id: string, changes: any): Promise<any> {
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
