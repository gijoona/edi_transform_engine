import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OracleConfig } from "src/conf/oracle.config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: OracleConfig
    })
  ]
})

export class OracleModule {}