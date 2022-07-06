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
  ParentCategoryDto,
  UpdateCategoriesDto,
} from '../dtos/categories.dtos';
import { CategoriesService } from '../services/categories.service';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({ summary: 'List all the childs categories' })
  findAll() {
    return this.categoriesService.findAll();
  }
  @Get('/parent')
  @ApiOperation({ summary: 'List all the Parents categories' })
  findAllParent() {
    return this.categoriesService.findAllParent();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new child category' })
  create(@Body() body: CreateCategoriesDto) {
    return this.categoriesService.create(body);
  }

  @Post('/parent')
  @ApiOperation({ summary: 'Create a new parent category' })
  createParent(@Body() body: ParentCategoryDto) {
    return this.categoriesService.createParent(body);
  }

  @Get(':prop/:value')
  @ApiOperation({ summary: 'Find Child Category by param' })
  findBy(@Param('prop') prop: string, @Param('value') value: string) {
    return this.categoriesService.findBy(prop, value);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Child Category' })
  update(@Param('id') id: string, @Body() body: UpdateCategoriesDto) {
    return this.categoriesService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Child Category' })
  delete(@Param('id') id: string) {
    return this.categoriesService.delete(id);
  }

  @Delete('parent/:id')
  @ApiOperation({ summary: 'Delete  Parent Category' })
  deleteParent(@Param('id') id: string) {
    return this.categoriesService.deleteParent(id);
  }
}
