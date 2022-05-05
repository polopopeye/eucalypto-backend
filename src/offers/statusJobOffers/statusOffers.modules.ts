import { Module } from '@nestjs/common';
import { StatusOffersController } from './controllers/statusOffers.controllers';
import { StatusOffersService } from './services/statusOffers.service';

@Module({
  imports: [],
  controllers: [StatusOffersController],
  providers: [StatusOffersService],
  exports: [],
})
export class StatusOffersModule {}
