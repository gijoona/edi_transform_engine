import { MongoConfig } from './../../conf/mongo.config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoController } from './mongo.controller';
import { MongoService } from './mongo.service';
import { Mongo, MongoSchema } from './schemas/mongo.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongoConfig
    }),
    MongooseModule.forFeature([{ name: Mongo.name, schema: MongoSchema }])
  ],
  controllers: [MongoController],
  providers: [MongoService],
})
export class MongoModule {}
