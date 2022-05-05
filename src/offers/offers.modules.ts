import { Module } from '@nestjs/common';
import { OffersController } from './controllers/offers.controllers';
import { OffersService } from './services/offers.service';
import { StatusOffersModule } from './statusJobOffers/statusOffers.modules';

@Module({
  imports: [StatusOffersModule],
  controllers: [OffersController],
  providers: [OffersService],
  exports: [],
})
export class OffersModule {}
