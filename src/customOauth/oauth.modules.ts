import { Module } from '@nestjs/common';

import { customOauthController } from './controllers/oauth.controllers';
import { OauthService } from './services/oauth.service';

@Module({
  imports: [],
  controllers: [customOauthController],
  providers: [OauthService],
  exports: [],
})
export class OauthModule {}
