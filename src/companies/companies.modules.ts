import { Module } from '@nestjs/common';
import { CompaniesController } from './controllers/companies.controllers';
import { CompaniesService } from './services/companies.service';

@Module({
  imports: [],
  controllers: [CompaniesController],
  providers: [CompaniesService],
  exports: [],
})
export class CompaniesModule {}
