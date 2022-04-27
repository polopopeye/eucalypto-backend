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
import { CreateEventsDto, UpdateEventsDto } from '../dtos/events.dtos';
import { EventsService } from '../services/events.service';

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  @ApiOperation({ summary: 'List all the events' })
  findAll() {
    return this.eventsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new event' })
  create(@Body() body: CreateEventsDto) {
    return this.eventsService.create(body);
  }

  @Get(':prop/:value')
  @ApiOperation({ summary: 'Find Event by param' })
  findBy(@Param('prop') prop: string, @Param('value') value: string) {
    return this.eventsService.findBy(prop, value);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Event' })
  update(@Param('id') id: string, @Body() body: UpdateEventsDto) {
    return this.eventsService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete  Event' })
  delete(@Param('id') id: string) {
    return this.eventsService.delete(id);
  }
}
