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
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';
import { UsersService } from '../services/users.service';

@ApiTags('Users')
@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'List all the Users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new User' })
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Post('manual-create')
  @ApiOperation({ summary: 'Create a new User' })
  manualCreate(@Body() body: CreateUserDto) {
    return this.usersService.manualCreate(body);
  }

  @Get(':prop/:value')
  @ApiOperation({ summary: 'Find User by param' })
  findBy(@Param('prop') prop: string, @Param('value') value: string) {
    return this.usersService.findBy(prop, value);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update User' })
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete  User' })
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
