"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const firestore_1 = require("@google-cloud/firestore");
const users_dtos_1 = require("../dtos/users.dtos");
const getDataFromQuerySnapsshot_1 = require("../../utils/getDataFromQuerySnapsshot");
const mail_service_1 = require("../../mail/mail.service");
const redis_provider_1 = require("../../redisProvider/redis.provider");
let UsersService = class UsersService {
    constructor(collection, mailService, redisClient) {
        this.collection = collection;
        this.mailService = mailService;
        this.redisClient = redisClient;
    }
    async create(queryUser) {
        const tableName = this.collection.id;
        const redisKeys = await this.redisClient.getKeysInclude(tableName);
        redisKeys.forEach(async (key) => {
            await this.redisClient.delete(key);
        });
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
        const user = Object.assign(Object.assign({}, queryUser), { createdAt: new Date(), updatedAt: new Date() });
        const docRef = this.collection.doc();
        await docRef.set(user);
        const userDoc = await docRef.get();
        return userDoc.data();
    }
    async manualCreate(queryUser) {
        const tableName = this.collection.id;
        const redisKeys = await this.redisClient.getKeysInclude(tableName);
        redisKeys.forEach(async (key) => {
            await this.redisClient.delete(key);
        });
        const snapshot = await this.collection
            .where('email', '==', queryUser.email)
            .get();
        if (!snapshot.empty) {
            console.log('queryUser already exists' + queryUser.email);
            return { alreadyExists: true };
        }
        const user = Object.assign(Object.assign({}, queryUser), { createdAt: new Date(), updatedAt: new Date() });
        const docRef = this.collection.doc();
        await docRef.set(user);
        const userDoc = await docRef.get();
        return userDoc.data();
    }
    async findAll() {
        const tableName = this.collection.id;
        const redisData = await this.redisClient.get(tableName);
        if (!redisData) {
            console.log(tableName + ': Served from DB');
            const snapshot = await this.collection.get();
            const data = (0, getDataFromQuerySnapsshot_1.default)(snapshot);
            if (data)
                this.redisClient.update(tableName, data);
            return data;
        }
        console.log(tableName + ': Served from Redis');
        return redisData;
    }
    async findBy(prop, value) {
        const tableName = this.collection.id + '_' + prop + '_' + value;
        const searchById = async () => {
            const docRef = await this.collection.doc(value).get();
            if (docRef.exists) {
                const data = Object.assign({ id: docRef.id }, docRef.data());
                if (data)
                    this.redisClient.update(tableName, data);
                return data;
            }
            else {
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
            const data = (0, getDataFromQuerySnapsshot_1.default)(snapshot);
            if (data)
                this.redisClient.update(tableName, data);
            return data;
        };
        const redisData = await this.redisClient.get(tableName);
        if (!redisData) {
            console.log(tableName + ': Served from DB');
            if (prop === 'id') {
                return searchById();
            }
            else {
                return searchByProp();
            }
        }
        console.log(tableName + ': Served from Redis');
        return redisData;
    }
    async update(id, changes) {
        const tableName = this.collection.id;
        const redisKeys = await this.redisClient.getKeysInclude(tableName);
        redisKeys.forEach(async (key) => {
            await this.redisClient.delete(key);
        });
        const searchById = async () => {
            const doc = this.collection.doc(id);
            const docRef = await doc.get();
            if (docRef.exists) {
                return doc;
            }
            else {
                return null;
            }
        };
        const docRef = await searchById();
        const doc = await docRef.get();
        const data = doc.data();
        if (docRef && changes) {
            const updateChanges = Object.assign(Object.assign({}, changes), { updatedAt: new Date() });
            await docRef.update(updateChanges);
            const offerDoc = await docRef.get();
            return offerDoc.data();
        }
        else {
            return {
                error: '🚀 ~ file: users.service ~ line 89 ~ EventsService ~ update ~ Error',
                changes,
                data,
            };
        }
    }
    async delete(id) {
        const tableName = this.collection.id;
        const redisKeys = await this.redisClient.getKeysInclude(tableName);
        redisKeys.forEach(async (key) => {
            await this.redisClient.delete(key);
        });
        if (id) {
            return await this.collection.doc(id).delete();
        }
        else {
            return ('🚀 ~ file: users.service.ts ~ line 92 ~ EventsService ~ delete ~ id' +
                id);
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(users_dtos_1.CreateUserDto.collectionName)),
    __metadata("design:paramtypes", [firestore_1.CollectionReference,
        mail_service_1.MailService,
        redis_provider_1.RedisProvider])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map