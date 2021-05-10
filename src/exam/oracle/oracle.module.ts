import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OracleConfig } from "src/conf/oracle.config";
import { EdiBackupDataModule } from "./edi_backup_data/edi_backup_data.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: OracleConfig
    }),
    EdiBackupDataModule
  ]
})

export class OracleModule {}