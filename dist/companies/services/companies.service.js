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
exports.CompaniesService = void 0;
const common_1 = require("@nestjs/common");
const firestore_1 = require("@google-cloud/firestore");
const companies_dtos_1 = require("../dtos/companies.dtos");
const getDataFromQuerySnapsshot_1 = require("../../utils/getDataFromQuerySnapsshot");
const redis_provider_1 = require("../../redisProvider/redis.provider");
let CompaniesService = class CompaniesService {
    constructor(collection, redisClient) {
        this.collection = collection;
        this.redisClient = redisClient;
    }
    async create(company) {
        const offer = Object.assign(Object.assign({}, company), { createdAt: new Date(), updatedAt: new Date() });
        const docRef = this.collection.doc();
        await docRef.set(offer);
        const offerDoc = await docRef.get();
        const tableName = this.collection.id;
        const redisKeys = await this.redisClient.getKeysInclude(tableName);
        redisKeys.forEach(async (key) => {
            await this.redisClient.delete(key);
        });
        return offerDoc.data();
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
    async findByOwner(id) {
        const tableName = this.collection.id + '_owner_' + id;
        const redisData = await this.redisClient.get(tableName);
        if (!redisData) {
            console.log(tableName + ': Served from DB');
            const snapshot = await this.collection
                .where('owners', 'array-contains', id)
                .get();
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            const data = (0, getDataFromQuerySnapsshot_1.default)(snapshot);
            if (data)
                this.redisClient.update(tableName, data);
            return data;
        }
        console.log(tableName + ': Served from Redis');
        return redisData;
    }
    async update(id, changes) {
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
        if (docRef && Object.keys(changes).length !== 0) {
            const tableName = this.collection.id;
            const redisKeys = await this.redisClient.getKeysInclude(tableName);
            redisKeys.forEach(async (key) => {
                await this.redisClient.delete(key);
            });
            await docRef.update(changes);
            const offerDoc = await docRef.get();
            return offerDoc.data();
        }
        return '🚀 ~ file: companies.service ~ line 89 ~ companyService ~ update ~ Error';
    }
    async delete(id) {
        if (id) {
            const tableName = this.collection.id;
            const redisKeys = await this.redisClient.getKeysInclude(tableName);
            redisKeys.forEach(async (key) => {
                await this.redisClient.delete(key);
            });
            return await this.collection.doc(id).delete();
        }
        else {
            return ('🚀 ~ file: companies.service.ts ~ line 92 ~ companyService ~ delete ~ id' +
                id);
        }
    }
};
CompaniesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(companies_dtos_1.CreateCompanyDto.collectionName)),
    __metadata("design:paramtypes", [firestore_1.CollectionReference,
        redis_provider_1.RedisProvider])
], CompaniesService);
exports.CompaniesService = CompaniesService;
//# sourceMappingURL=companies.service.js.map