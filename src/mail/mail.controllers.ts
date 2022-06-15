import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dtos/users.dtos';
import { CreateOffersDto } from 'src/offers/dtos/offers.dtos';
import { MailService } from './mail.service';
import config from 'src/config';
import { ConfigType } from '@nestjs/config';

@ApiTags('Mail Service')
@Controller('mail')
export class MailController {
  private configuration: ConfigType<typeof config> = config();

  constructor(private mailService: MailService) {}

  @Post('sendToUserAppliedOk')
  @ApiOperation({ summary: 'Send Email User Applied' })
  create(@Body() body: { user: CreateUserDto; jobOffer: CreateOffersDto }) {
    const { user, jobOffer } = body;

    return this.mailService.sendToUserAppliedOk(
      { displayName: user.displayName, email: user.email },
      {
        job: jobOffer.job,
        url: this.configuration.front.host + '/job/' + jobOffer.id,
      },
    );
  }

  @Post('sendToUserWelcomeMessage')
  @ApiOperation({ summary: 'Send Welcome Message' })
  welcomeMsg(@Body() user: any) {
    return this.mailService.sendToUserWelcomeMail({
      displayName: user.displayName,
      email: user.email,
    });
  }

  @Post('sendToUserStatusChanged')
  @ApiOperation({ summary: 'Send Status Update' })
  statusUpdate(
    @Body()
    body: {
      user: CreateUserDto;
      jobOffer: CreateOffersDto;
      statusDescription: string;
    },
  ) {
    const { user, jobOffer, statusDescription } = body;

    return this.mailService.sendToUserStatusChanged(
      {
        displayName: user.displayName,
        email: user.email,
      },
      {
        job: jobOffer.job,
        url: this.configuration.front.host + '/job/' + jobOffer.id,
      },
      statusDescription,
    );
  }
}
