import { CreateOffersDto, UpdateOffersDto } from '../dtos/offers.dtos';
import { OffersService } from '../services/offers.service';
export declare class OffersController {
    private offersService;
    constructor(offersService: OffersService);
    findAll(): Promise<any[]>;
    create(body: CreateOffersDto): Promise<CreateOffersDto>;
    findBy(prop: string, value: string): Promise<any[]>;
    update(id: string, body: UpdateOffersDto): Promise<any>;
    delete(id: string): Promise<any>;
}
