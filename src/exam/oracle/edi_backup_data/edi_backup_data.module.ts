import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EdiBackupDataController } from "./edi_backup_data.controller";
import { EdiBackupDataService } from "./edi_backup_data.service";
import { EdiBackupData } from "./entities/edi_backup_data.entity";

@Module({
    imports: [TypeOrmModule.forFeature([EdiBackupData])],
    providers: [EdiBackupDataService],
    controllers: [EdiBackupDataController]
})

export class EdiBackupDataModule {}