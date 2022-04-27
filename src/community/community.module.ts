import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.modules';
import { EventsModule } from './events/events.modules';

@Module({
  imports: [EventsModule, ArticlesModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class CommunityModule {}
