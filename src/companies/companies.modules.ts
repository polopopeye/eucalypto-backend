import { Module } from '@nestjs/common';
import { RedisProvider } from 'src/redisProvider/redis.provider';
import { CompaniesController } from './controllers/companies.controllers';
import { CompaniesService } from './services/companies.service';

@Module({
  imports: [],
  controllers: [CompaniesController],
  providers: [CompaniesService, RedisProvider],
  exports: [],
})
export class CompaniesModule {}
