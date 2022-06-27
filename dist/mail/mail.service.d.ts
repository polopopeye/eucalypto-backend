import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendToUserAppliedOk(user: {
        email: string;
        displayName: string;
    }, jobOffer: {
        job: string;
        url: string;
    }): Promise<void>;
    sendToUserWelcomeMail(user: {
        email: string;
        displayName: string;
    }): Promise<void>;
    sendToUserStatusChanged(user: {
        email: string;
        displayName: string;
    }, jobOffer: {
        job: string;
        url: string;
    }, statusDescription: string): Promise<void>;
}
