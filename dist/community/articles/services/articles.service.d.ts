import { CollectionReference } from '@google-cloud/firestore';
import { CreateArticlesDto, UpdateArticlesDto } from '../dtos/articles.dtos';
export declare class ArticlesService {
    private collection;
    constructor(collection: CollectionReference<CreateArticlesDto>);
    create(events: any): Promise<CreateArticlesDto>;
    findAll(): Promise<any[]>;
    findBy(prop: any, value: any): Promise<any[]>;
    update(id: string, changes: UpdateArticlesDto): Promise<any>;
    delete(id: string): Promise<any>;
}
