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
      job: string;
      url: string;
    },
  ) {
    // SEND EMAIL TO USER
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Applied Correctly, Good Luck!',
      template: 'newOfferApply',
      context: {
        displayName: user.displayName,
        jobOffer,
      },
    });

    // SEND EMAIL TO HEADHUNTERS
    await this.mailerService.sendMail({
      to: [
        'ksuarez@eucalyptogroup.com',
        'kenneth7e7a@gmail.com',
        'kennethsuarez33@gmail.com',
        'amartinez@eucalyptogroup.com',
        'gsaitta@eucalyptogroup.com',
      ],
      subject: 'New Apply from an user to a jobOffer',
      template: 'newOfferApplyAdmin',
      context: {
        displayName: user.displayName,
        jobOffer,
      },
    });
  }

  async sendToUserWelcomeMail(user: { email: string; displayName: string }) {
    // SEND EMAIL TO USER
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to Eucalypto!',
      template: 'newRegister',
      context: {
        displayName: user.displayName,
      },
    });
  }

  async sendToUserStatusChanged(
    user: {
      email: string;
      displayName: string;
    },
    jobOffer: {
      job: string;
      url: string;
    },
    statusDescription: string,
  ) {
    // SEND EMAIL TO USER
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Status of your application updated!',
      template: 'statusOfferUpdated',
      context: {
        displayName: user.displayName,
        jobOffer,
        statusDescription,
      },
    });
  }
}
