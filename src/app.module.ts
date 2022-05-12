import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FirestoreModule } from './firestore/firestore.module';

import { OffersModule } from './offers/offers.modules';
import { CategoriesModule } from './categories/categories.modules';
import { CompaniesModule } from './companies/companies.modules';
import { CommunityModule } from './community/community.module';
import { UsersModule } from './users/users.modules';
import { StatusOffersModule } from './offers/statusJobOffers/statusOffers.modules';
import { MailModule } from './mail/mail.module';

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
    CommunityModule,
    OffersModule,
    CategoriesModule,
    CompaniesModule,
    UsersModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
