import { Module } from '@nestjs/common';
import { MailService } from './mail.service';

import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { join } from 'path';
import { MailController } from './mail.controllers';

@Module({
  imports: [
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          // https://myaccount.google.com/security CONTRASEÑA DE APPLICACION
          user: 'hello@eucalyptogroup.com', // TODO: THIS SHOULD BE EDITED
          pass: 'ivycnxdwwskfirrt',
        },
      },
      defaults: {
        from: '"Eucalypto Group" <hello@eucalyptogroup.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
