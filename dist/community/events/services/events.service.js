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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const firestore_1 = require("@google-cloud/firestore");
const events_dtos_1 = require("../dtos/events.dtos");
const getDataFromQuerySnapsshot_1 = require("../../../utils/getDataFromQuerySnapsshot");
let EventsService = class EventsService {
    constructor(collection) {
        this.collection = collection;
    }
    async create(events) {
        const offer = Object.assign(Object.assign({}, events), { assistants: [], createdAt: new Date(), updatedAt: new Date() });
        const docRef = this.collection.doc();
        await docRef.set(offer);
        const offerDoc = await docRef.get();
        return offerDoc.data();
    }
    async findAll() {
        const snapshot = await this.collection.get();
        return (0, getDataFromQuerySnapsshot_1.default)(snapshot);
    }
    async findBy(prop, value) {
        const searchById = async () => {
            const docRef = await this.collection.doc(value).get();
            if (docRef.exists) {
                return Object.assign({ id: docRef.id }, docRef.data());
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
            return (0, getDataFromQuerySnapsshot_1.default)(snapshot);
        };
        if (prop === 'id') {
            return searchById();
        }
        else {
            return searchByProp();
        }
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
            await docRef.update(changes);
            const offerDoc = await docRef.get();
            return offerDoc.data();
        }
        return '🚀 ~ file: offers.service ~ line 89 ~ EventsService ~ update ~ Error';
    }
    async delete(id) {
        if (id) {
            return await this.collection.doc(id).delete();
        }
        else {
            return ('🚀 ~ file: offers.service.ts ~ line 92 ~ EventsService ~ delete ~ id' +
                id);
        }
    }
};
EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(events_dtos_1.CreateEventsDto.collectionName)),
    __metadata("design:paramtypes", [firestore_1.CollectionReference])
], EventsService);
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map