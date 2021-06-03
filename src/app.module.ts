import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TransModule } from './trans/trans.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TransModule
  ]
})
export class AppModule {}
