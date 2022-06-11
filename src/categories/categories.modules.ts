import { Module } from '@nestjs/common';
import { RedisProvider } from 'src/redisProvider/redis.provider';
import { CategoriesController } from './controllers/categories.controllers';
import { CategoriesService } from './services/categories.service';

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [CategoriesService, RedisProvider],
  exports: [],
})
export class CategoriesModule {}
