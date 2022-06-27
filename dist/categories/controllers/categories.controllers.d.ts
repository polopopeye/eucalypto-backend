import { CreateCategoriesDto, UpdateCategoriesDto } from '../dtos/categories.dtos';
import { CategoriesService } from '../services/categories.service';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<any[]>;
    create(body: CreateCategoriesDto): Promise<CreateCategoriesDto>;
    findBy(prop: string, value: string): Promise<any[]>;
    update(id: string, body: UpdateCategoriesDto): Promise<any>;
    delete(id: string): Promise<any>;
}
