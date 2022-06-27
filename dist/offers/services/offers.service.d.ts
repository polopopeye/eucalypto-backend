import { CollectionReference } from '@google-cloud/firestore';
import { CreateOffersDto } from '../dtos/offers.dtos';
import { RedisProvider } from 'src/redisProvider/redis.provider';
export declare class OffersService {
    private collection;
    private redisClient;
    constructor(collection: CollectionReference<CreateOffersDto>, redisClient: RedisProvider);
    create(Offers: any): Promise<CreateOffersDto>;
    findAll(): Promise<any[]>;
    findBy(prop: any, value: any): Promise<any[]>;
    update(id: string, changes: any): Promise<any>;
    delete(id: string): Promise<any>;
}
