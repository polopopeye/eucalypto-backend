import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FirestoreModule } from './firestore/firestore.module';

import { EventsModule } from './events/events.modules';
import { OffersModule } from './offers/offers.modules';
import { CategoriesModule } from './categories/categories.modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FirestoreModule.forRoot({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        projectId: configService.get<string>('GOOGLE_PROJECT_ID'),
        keyFilename: configService.get<string>(
          'GOOGLE_APPLICATION_CREDENTIALS',
        ),
      }),
      inject: [ConfigService],
    }),
    EventsModule,
    OffersModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
