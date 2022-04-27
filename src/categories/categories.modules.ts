import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/categories.controllers';
import { CategoriesService } from './services/categories.service';

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [],
})
export class CategoriesModule {}
