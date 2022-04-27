import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FirestoreModule } from './firestore/firestore.module';

import { OffersController } from './offers/controllers/offers.controllers';
import { OffersService } from './offers/services/offers.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FirestoreModule.forRoot({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        projectId: 'eucalypto-group',
        keyFilename: './gcred.json',
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, OffersController],
  providers: [AppService, OffersService],
})
export class AppModule {}
