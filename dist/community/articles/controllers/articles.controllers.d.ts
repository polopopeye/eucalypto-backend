import { CreateArticlesDto, UpdateArticlesDto } from '../dtos/articles.dtos';
import { ArticlesService } from '../services/articles.service';
export declare class ArticlesController {
    private articlesService;
    constructor(articlesService: ArticlesService);
    findAll(): Promise<any[]>;
    create(body: CreateArticlesDto): Promise<CreateArticlesDto>;
    findBy(prop: string, value: string): Promise<any[]>;
    update(id: string, body: UpdateArticlesDto): Promise<any>;
    delete(id: string): Promise<any>;
}
