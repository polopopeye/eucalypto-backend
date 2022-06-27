import { CollectionReference } from '@google-cloud/firestore';
import { CreateStatusOffersDto } from '../dtos/statusOffers.dtos';
import { RedisProvider } from 'src/redisProvider/redis.provider';
export declare class StatusOffersService {
    private collection;
    private redisClient;
    constructor(collection: CollectionReference<CreateStatusOffersDto>, redisClient: RedisProvider);
    create(Offers: any): Promise<CreateStatusOffersDto>;
    findAll(): Promise<any[]>;
    findBy(userId: any, jobId: any): Promise<any[]>;
    update(id: string, changes: any): Promise<any>;
    delete(id: string, idJobOffer: string): Promise<any>;
    deleteById(id: string): Promise<any>;
}
