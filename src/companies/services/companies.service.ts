import { Injectable, Inject } from '@nestjs/common';
import { CollectionReference } from '@google-cloud/firestore';
import {
  CreateCompanyDto,
  GetCompanyDto,
  UpdateCompanyDto,
} from '../dtos/companies.dtos';
import getDataFromQuerySnapsshot from 'src/utils/getDataFromQuerySnapsshot';
import { RedisProvider } from 'src/redisProvider/redis.provider';

@Injectable()
export class CompaniesService {
  constructor(
    @Inject(CreateCompanyDto.collectionName)
    private collection: CollectionReference<CreateCompanyDto>,
    private redisClient: RedisProvider,
  ) {}

  async create(company): Promise<CreateCompanyDto> {
    const offer: GetCompanyDto = {
      ...company,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const docRef = this.collection.doc();
    await docRef.set(offer);
    const offerDoc = await docRef.get();

    return offerDoc.data();
  }

  async findAll(): Promise<any[]> {
    const tableName = this.collection.id; // offers;

    console.log(tableName + ': Served from DB');
    const snapshot = await this.collection.get();
    const data = getDataFromQuerySnapsshot(snapshot);
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

  async findByOwner(id: string): Promise<any> {
    const tableName = this.collection.id + '_owner_' + id;

    console.log(tableName + ': Served from DB');
    const snapshot = await this.collection
      .where('owners', 'array-contains', id)
      .get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    const data = getDataFromQuerySnapsshot(snapshot);
    return data;
  }

  async update(id: string, changes: UpdateCompanyDto): Promise<any> {
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
    return '🚀 ~ file: companies.service ~ line 89 ~ companyService ~ update ~ Error';
  }

  async delete(id: string): Promise<any> {
    if (id) {
      return await this.collection.doc(id).delete();
    } else {
      return (
        '🚀 ~ file: companies.service.ts ~ line 92 ~ companyService ~ delete ~ id' +
        id
      );
    }
  }
}
