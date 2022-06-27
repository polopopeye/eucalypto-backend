import { CollectionReference } from '@google-cloud/firestore';
import { CreateCategoriesDto, UpdateCategoriesDto } from '../dtos/categories.dtos';
import { RedisProvider } from 'src/redisProvider/redis.provider';
export declare class CategoriesService {
    private collection;
    private redisClient;
    constructor(collection: CollectionReference<CreateCategoriesDto>, redisClient: RedisProvider);
    create(events: any): Promise<CreateCategoriesDto>;
    findAll(): Promise<any[]>;
    findBy(prop: any, value: any): Promise<any[]>;
    update(id: string, changes: UpdateCategoriesDto): Promise<any>;
    delete(id: string): Promise<any>;
}
