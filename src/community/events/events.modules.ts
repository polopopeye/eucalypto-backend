import { Module } from '@nestjs/common';
import { EventsController } from './controllers/events.controllers';
import { EventsService } from './services/events.service';

@Module({
  imports: [],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [],
})
export class EventsModule {}
