import { Module } from '@nestjs/common';
import { RedisProvider } from 'src/redisProvider/redis.provider';
import { StatusOffersController } from './controllers/statusOffers.controllers';
import { StatusOffersService } from './services/statusOffers.service';

@Module({
  imports: [],
  controllers: [StatusOffersController],
  providers: [StatusOffersService, RedisProvider],
  exports: [],
})
export class StatusOffersModule {}
