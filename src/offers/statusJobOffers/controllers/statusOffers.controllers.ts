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
  CreateStatusOffersDto,
  StatusUpdateOffersDto,
} from '../dtos/statusOffers.dtos';
import { StatusOffersService } from '../services/statusOffers.service';

@ApiTags('StatusJobOffers')
@Controller('status-job-offers')
export class StatusOffersController {
  constructor(private statusOffersService: StatusOffersService) {}

  @Get()
  @ApiOperation({ summary: 'List all the status job offers' })
  findAll() {
    return this.statusOffersService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new status job offer' })
  create(@Body() body: CreateStatusOffersDto) {
    return this.statusOffersService.create(body);
  }

  @Get(':userId/:jobId')
  @ApiOperation({ summary: 'Create a new status job offer' })
  findBy(@Param('userId') userId: string, @Param('jobId') jobId: string) {
    return this.statusOffersService.findBy(userId, jobId);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update status job offer' })
  update(@Param('id') id: string, @Body() body: StatusUpdateOffersDto) {
    return this.statusOffersService.update(id, body);
  }

  @Delete(':id/')
  @ApiOperation({ summary: 'Delete status job offer by id' })
  deleteById(@Param('id') id: string) {
    return this.statusOffersService.deleteById(id);
  }

  @Delete(':id/:idJobOffer')
  @ApiOperation({ summary: 'Delete all status job offer By UserID and JobID' })
  delete(@Param('id') id: string, @Param('idJobOffer') idJobOffer: string) {
    return this.statusOffersService.delete(id, idJobOffer);
  }
}
