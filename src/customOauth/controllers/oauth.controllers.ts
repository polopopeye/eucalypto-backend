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
import { OauthService } from '../services/oauth.service';

@ApiTags('Custom-Oauth')
@Controller('Oauth')
export class customOauthController {
  constructor(private oauthService: OauthService) {}

  @Post('linkedIn-User')
  @ApiOperation({ summary: 'Oauth LinkedIn' })
  linkedInOauth(@Body() body) {
    return this.oauthService.linkedInOauth(body);
  }
}
