import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FirestoreModule } from './firestore/firestore.module';
// import { TodosModule } from './todos/todos.module';
import { TodoDto } from './todos/dtos/todo.document';
import { TodoService } from './todos/services/todo.service';
import { TodoController } from './todos/controllers/todo.controllers';
// TodoDocument
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
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
