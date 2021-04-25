import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamModule } from './exam/exam.module';
import { MongoConfig } from './conf/mongo.config';

@Module({
  imports: [
    ExamModule,
    MongooseModule.forRootAsync({
      useClass: MongoConfig
    })
  ]
})
export class AppModule {}
