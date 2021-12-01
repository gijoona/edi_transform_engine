import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TransModule } from './trans/trans.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod').required(), 
        MO_URI: Joi.string().required(),
        DB_TYPE: Joi.string().required(),
        DB_USERNAME: Joi.string().required(), 
        DB_PASSWORD: Joi.string().required(), 
        DB_CONNECTSTRING: Joi.string().required(),
      })
    }),
    ScheduleModule.forRoot(),
    TransModule
  ]
})
export class AppModule {}
