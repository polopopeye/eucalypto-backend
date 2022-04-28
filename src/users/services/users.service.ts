import { Injectable, Inject } from '@nestjs/common';
import { CollectionReference } from '@google-cloud/firestore';
import { CreateUserDto, GetUserDto, UpdateUserDto } from '../dtos/users.dtos';
import getDataFromQuerySnapsshot from 'src/utils/getDataFromQuerySnapsshot';

@Injectable()
export class UsersService {
  constructor(
    @Inject(CreateUserDto.collectionName)
    private collection: CollectionReference<CreateUserDto>,
  ) {}

  async create(queryUser): Promise<any> {
    const snapshot = await this.collection
      .where('email', '==', queryUser.email)
      .get();
    if (!snapshot.empty) {
      console.log('queryUser already exists' + queryUser.email);
      return { alreadyExists: true };
    }

    const user: GetUserDto = {
      ...queryUser,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const docRef = this.collection.doc();
    await docRef.set(user);
    const userDoc = await docRef.get();
    return userDoc.data();
  }

  async findAll(): Promise<any[]> {
    const snapshot = await this.collection.get();
    return getDataFromQuerySnapsshot(snapshot);
  }

  async findBy(prop, value): Promise<any[]> {
    const searchById = async () => {
      const docRef: any = await this.collection.doc(value).get();
      if (docRef.exists) {
        return docRef.data();
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

  async update(id: string, changes: UpdateUserDto): Promise<any> {
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
    return '🚀 ~ file: companies.service ~ line 89 ~ EventsService ~ update ~ Error';
  }

  async delete(id: string): Promise<any> {
    if (id) {
      return await this.collection.doc(id).delete();
    } else {
      return (
        '🚀 ~ file: companies.service.ts ~ line 92 ~ EventsService ~ delete ~ id' +
        id
      );
    }
  }
}
