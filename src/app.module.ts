import { Module } from '@nestjs/common';
import { MongoModule } from './exam/mongo/mongo.module';

@Module({
  imports: [
    MongoModule
  ]
})
export class AppModule {}
