import { CollectionReference } from '@google-cloud/firestore';
import { CreateCategoriesDto, ParentCategoryDto, UpdateCategoriesDto } from '../dtos/categories.dtos';
import { RedisProvider } from 'src/redisProvider/redis.provider';
export declare class CategoriesService {
    private collection;
    private parentCollection;
    private redisClient;
    constructor(collection: CollectionReference<CreateCategoriesDto>, parentCollection: CollectionReference<ParentCategoryDto>, redisClient: RedisProvider);
    create(events: any): Promise<CreateCategoriesDto>;
    createParent(parentCat: any): Promise<ParentCategoryDto>;
    findAll(): Promise<any[]>;
    findAllParent(): Promise<any[]>;
    findBy(prop: any, value: any): Promise<any[]>;
    update(id: string, changes: UpdateCategoriesDto): Promise<any>;
    delete(id: string): Promise<any>;
    deleteParent(id: string): Promise<any>;
}
