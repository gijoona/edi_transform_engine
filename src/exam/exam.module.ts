import { Module } from "@nestjs/common";
import { MongoModule } from "./mongo/mongo.module";
import { OracleModule } from "./oracle/oracle.module";

@Module({
  imports: [
    OracleModule,
    MongoModule
  ]
})

export class ExamModule {}