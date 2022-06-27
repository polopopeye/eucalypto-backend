import { CollectionReference } from '@google-cloud/firestore';
import { CreateCompanyDto, UpdateCompanyDto } from '../dtos/companies.dtos';
import { RedisProvider } from 'src/redisProvider/redis.provider';
export declare class CompaniesService {
    private collection;
    private redisClient;
    constructor(collection: CollectionReference<CreateCompanyDto>, redisClient: RedisProvider);
    create(company: any): Promise<CreateCompanyDto>;
    findAll(): Promise<any[]>;
    findBy(prop: any, value: any): Promise<any[]>;
    findByOwner(id: string): Promise<any>;
    update(id: string, changes: UpdateCompanyDto): Promise<any>;
    delete(id: string): Promise<any>;
}
