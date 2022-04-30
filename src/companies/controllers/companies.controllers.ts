import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCompanyDto, UpdateCompanyDto } from '../dtos/companies.dtos';
import { CompaniesService } from '../services/companies.service';

@ApiTags('Companies')
@Controller('company')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  @Get()
  @ApiOperation({ summary: 'List all the Companies' })
  findAll() {
    return this.companiesService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new Company' })
  create(@Body() body: CreateCompanyDto) {
    return this.companiesService.create(body);
  }

  @Get(':prop/:value')
  @ApiOperation({ summary: 'Find Company by param' })
  findBy(@Param('prop') prop: string, @Param('value') value: string) {
    return this.companiesService.findBy(prop, value);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find All Companies by owner id' })
  findByOwner(@Param('id') id: string) {
    return this.companiesService.findByOwner(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Company' })
  update(@Param('id') id: string, @Body() body: UpdateCompanyDto) {
    return this.companiesService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete  Company' })
  delete(@Param('id') id: string) {
    return this.companiesService.delete(id);
  }
}
