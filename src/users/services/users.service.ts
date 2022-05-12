import { Injectable, Inject } from '@nestjs/common';
import { CollectionReference } from '@google-cloud/firestore';
import { CreateUserDto, GetUserDto, UpdateUserDto } from '../dtos/users.dtos';
import getDataFromQuerySnapsshot from 'src/utils/getDataFromQuerySnapsshot';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(CreateUserDto.collectionName)
    private collection: CollectionReference<CreateUserDto>,
    private mailService: MailService,
  ) {}

  async create(queryUser): Promise<any> {
    const snapshot = await this.collection
      .where('email', '==', queryUser.email)
      .get();
    if (!snapshot.empty) {
      console.log('queryUser already exists' + queryUser.email);
      return { alreadyExists: true };
    }

    this.mailService.sendToUserWelcomeMail({
      displayName: queryUser.displayName,
      email: queryUser.email,
    });

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

  async manualCreate(queryUser): Promise<any> {
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
    const doc = await docRef.get();
    const data = doc.data();

    if (docRef && changes) {
      const updateChanges = {
        ...changes,
        updatedAt: new Date(),
      };

      await docRef.update(updateChanges);
      const offerDoc = await docRef.get();
      return offerDoc.data();
    } else {
      return {
        error:
          '🚀 ~ file: users.service ~ line 89 ~ EventsService ~ update ~ Error',
        changes,
        data,
      };
    }
  }

  async delete(id: string): Promise<any> {
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
