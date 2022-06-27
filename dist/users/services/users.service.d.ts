import { CollectionReference } from '@google-cloud/firestore';
import { CreateUserDto } from '../dtos/users.dtos';
import { MailService } from 'src/mail/mail.service';
import { RedisProvider } from 'src/redisProvider/redis.provider';
export declare class UsersService {
    private collection;
    private mailService;
    private redisClient;
    constructor(collection: CollectionReference<CreateUserDto>, mailService: MailService, redisClient: RedisProvider);
    create(queryUser: any): Promise<any>;
    manualCreate(queryUser: any): Promise<any>;
    findAll(): Promise<any[]>;
    findBy(prop: any, value: any): Promise<any[]>;
    update(id: string, changes: any): Promise<any>;
    delete(id: string): Promise<any>;
}
