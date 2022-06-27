import { CreateStatusOffersDto, StatusUpdateOffersDto } from '../dtos/statusOffers.dtos';
import { StatusOffersService } from '../services/statusOffers.service';
export declare class StatusOffersController {
    private statusOffersService;
    constructor(statusOffersService: StatusOffersService);
    findAll(): Promise<any[]>;
    create(body: CreateStatusOffersDto): Promise<CreateStatusOffersDto>;
    findBy(userId: string, jobId: string): Promise<any[]>;
    update(id: string, body: StatusUpdateOffersDto): Promise<any>;
    deleteById(id: string): Promise<any>;
    delete(id: string, idJobOffer: string): Promise<any>;
}
