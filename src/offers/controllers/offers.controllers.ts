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
import { CreateOffersDto, UpdateOffersDto } from '../dtos/offers.dtos';
import { OffersService } from '../services/offers.service';

@ApiTags('JobOffers')
@Controller('job-offers')
export class OffersController {
  constructor(private offersService: OffersService) {}

  @Get()
  @ApiOperation({ summary: 'List all the job offers' })
  findAll() {
    return this.offersService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new job offer' })
  create(@Body() body: CreateOffersDto) {
    return this.offersService.create(body);
  }

  @Get(':prop/:value')
  @ApiOperation({ summary: 'Create a new job offer' })
  findBy(@Param('prop') prop: string, @Param('value') value: string) {
    return this.offersService.findBy(prop, value);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update job offer' })
  update(@Param('id') id: string, @Body() body: UpdateOffersDto) {
    return this.offersService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete  job offer' })
  delete(@Param('id') id: string) {
    return this.offersService.delete(id);
  }
}
