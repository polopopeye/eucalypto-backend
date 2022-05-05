import { Injectable, Inject } from '@nestjs/common';
import { CollectionReference } from '@google-cloud/firestore';
import {
  CreateStatusOffersDto,
  StatusGetOffersDto,
  StatusUpdateOffersDto,
} from '../dtos/statusOffers.dtos';
import getDataFromQuerySnapsshot from 'src/utils/getDataFromQuerySnapsshot';

@Injectable()
export class StatusOffersService {
  constructor(
    @Inject(CreateStatusOffersDto.collectionName)
    private collection: CollectionReference<CreateStatusOffersDto>,
  ) {}

  async create(Offers): Promise<CreateStatusOffersDto> {
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
    return getDataFromQuerySnapsshot(snapshot);
  }

  async findBy(userId, jobId): Promise<any[]> {
    const snapshot: any = await this.collection
      .where('idUser', '==', userId)
      .where('idJob', '==', jobId)
      .get();

    if (snapshot.empty) {
      console.log('No matching documents.');
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
}
