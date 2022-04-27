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
import {
  CreateCategoriesDto,
  UpdateCategoriesDto,
} from '../dtos/categories.dtos';
import { CategoriesService } from '../services/categories.service';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({ summary: 'List all the categories' })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new event' })
  create(@Body() body: CreateCategoriesDto) {
    return this.categoriesService.create(body);
  }

  @Get(':prop/:value')
  @ApiOperation({ summary: 'Find Event by param' })
  findBy(@Param('prop') prop: string, @Param('value') value: string) {
    return this.categoriesService.findBy(prop, value);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Event' })
  update(@Param('id') id: string, @Body() body: UpdateCategoriesDto) {
    return this.categoriesService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete  Event' })
  delete(@Param('id') id: string) {
    return this.categoriesService.delete(id);
  }
}
