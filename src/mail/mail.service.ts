import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendToUserAppliedOk(
    user: {
      email: string;
      displayName: string;
    },
    jobOffer: {
      name: string;
      url: string;
    },
  ) {
    await this.mailerService.sendMail({
      to: user.email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Applied Correctly, Good Luck!',
      template: 'newOfferApply', // `.hbs` extension is appended automatically
      context: {
        displayName: user.displayName,
        jobOffer,
      },
    });
  }
}
