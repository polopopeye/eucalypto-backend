import { Module } from '@nestjs/common';
import { RedisProvider } from 'src/redisProvider/redis.provider';
import { OffersController } from './controllers/offers.controllers';
import { OffersService } from './services/offers.service';
import { StatusOffersModule } from './statusJobOffers/statusOffers.modules';

@Module({
  imports: [StatusOffersModule],
  controllers: [OffersController],
  providers: [OffersService, RedisProvider],
  exports: [],
})
export class OffersModule {}
