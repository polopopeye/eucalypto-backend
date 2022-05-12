import { Module } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { UsersController } from './controllers/users.controllers';
import { UsersService } from './services/users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, MailService],
  exports: [],
})
export class UsersModule {}
