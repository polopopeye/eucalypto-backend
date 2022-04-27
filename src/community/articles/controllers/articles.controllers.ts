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
import { CreateArticlesDto, UpdateArticlesDto } from '../dtos/articles.dtos';
import { ArticlesService } from '../services/articles.service';

@ApiTags('Articles')
@Controller('article')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get()
  @ApiOperation({ summary: 'List all the articles' })
  findAll() {
    return this.articlesService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new article' })
  create(@Body() body: CreateArticlesDto) {
    return this.articlesService.create(body);
  }

  @Get(':prop/:value')
  @ApiOperation({ summary: 'Find article by param' })
  findBy(@Param('prop') prop: string, @Param('value') value: string) {
    return this.articlesService.findBy(prop, value);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update article' })
  update(@Param('id') id: string, @Body() body: UpdateArticlesDto) {
    return this.articlesService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete  article' })
  delete(@Param('id') id: string) {
    return this.articlesService.delete(id);
  }
}
