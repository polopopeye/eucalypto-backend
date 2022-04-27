import { Module } from '@nestjs/common';
import { OffersController } from './controllers/offers.controllers';
import { OffersService } from './services/offers.service';

@Module({
  imports: [],
  controllers: [OffersController],
  providers: [OffersService],
  exports: [],
})
export class OffersModule {}
