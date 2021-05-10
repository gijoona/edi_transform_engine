import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EdiBackupData } from "./entities/edi_backup_data.entity";

@Injectable()
export class EdiBackupDataService {
  constructor(@InjectRepository(EdiBackupData) private ediRepository: Repository<EdiBackupData>){}

  findAll(): Promise<EdiBackupData[]> {
    return this.ediRepository.find();
  }
}