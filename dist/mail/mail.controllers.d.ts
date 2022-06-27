import { CreateUserDto } from 'src/users/dtos/users.dtos';
import { CreateOffersDto } from 'src/offers/dtos/offers.dtos';
import { MailService } from './mail.service';
export declare class MailController {
    private mailService;
    private configuration;
    constructor(mailService: MailService);
    create(body: {
        user: CreateUserDto;
        jobOffer: CreateOffersDto;
    }): Promise<void>;
    welcomeMsg(user: any): Promise<void>;
    statusUpdate(body: {
        user: CreateUserDto;
        jobOffer: CreateOffersDto;
        statusDescription: string;
    }): Promise<void>;
}
