import { CreateCompanyDto, UpdateCompanyDto } from '../dtos/companies.dtos';
import { CompaniesService } from '../services/companies.service';
export declare class CompaniesController {
    private companiesService;
    constructor(companiesService: CompaniesService);
    findAll(): Promise<any[]>;
    create(body: CreateCompanyDto): Promise<CreateCompanyDto>;
    findBy(prop: string, value: string): Promise<any[]>;
    findByOwner(id: string): Promise<any>;
    update(id: string, body: UpdateCompanyDto): Promise<any>;
    delete(id: string): Promise<any>;
}
