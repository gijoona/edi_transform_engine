import { Module } from '@nestjs/common';
import { MongoModule } from './exam/mongo/mongo.module';
import { OracleModule } from './exam/oracle/oracle.module';

@Module({
  imports: [
    OracleModule,
    MongoModule
  ]
})
export class AppModule {}
