import {
  Body,
  Controller,
  Get,
  Post,
  //   Param,
  //   Post,
  //   Body,
  //   Put,
  //   Delete,
  //   ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TodoDto } from '../dtos/todo.document';
import { TodoService } from '../services/todo.service';

// import { todoService } from '../services/brands.service';
// import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';

@ApiTags('Todos')
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  //   @Get(':id')
  //   get(@Param('id', ParseIntPipe) id: number) {
  //     return this.todoService.findOne(id);
  //   }

  //   @Post()
  //   create(@Body() payload: TodoDto) {
  //     return this.todoService.create(payload);
  //   }

  //   @Put(':id')
  //   update(
  //     @Param('id', ParseIntPipe) id: number,
  //     @Body() payload: UpdateBrandDto,
  //   ) {
  //     return this.todoService.update(id, payload);
  //   }

  //   @Delete(':id')
  //   remove(@Param('id', ParseIntPipe) id: number) {
  //     return this.todoService.remove(+id);
  //   }
}
