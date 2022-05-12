import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MailService } from './mail.service';

@ApiTags('Mail Service')
@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Post()
  @ApiOperation({ summary: 'Send a new Email' })
  create(@Body() body: any) {
    console.log(
      '🚀 ~ file: mail.controllers.ts ~ line 21 ~ MailController ~ create ~ body',
      body,
    );
    return this.mailService.sendToUserAppliedOk(
      { displayName: 'Kenneth', email: 'kenneth7e7a@gmail.com' },
      {
        name: 'Programador',
        url: 'https://www.google.com',
      },
    );
  }
}
