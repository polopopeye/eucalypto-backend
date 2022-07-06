import { CreateCategoriesDto, ParentCategoryDto, UpdateCategoriesDto } from '../dtos/categories.dtos';
import { CategoriesService } from '../services/categories.service';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<any[]>;
    findAllParent(): Promise<any[]>;
    create(body: CreateCategoriesDto): Promise<CreateCategoriesDto>;
    createParent(body: ParentCategoryDto): Promise<ParentCategoryDto>;
    findBy(prop: string, value: string): Promise<any[]>;
    update(id: string, body: UpdateCategoriesDto): Promise<any>;
    delete(id: string): Promise<any>;
    deleteParent(id: string): Promise<any>;
}
