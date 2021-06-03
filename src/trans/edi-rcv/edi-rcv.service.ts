import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

// mongo
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EdiBackupDto } from './mongo/dto/edi_backup.dto';
import { EdiBackup, EdiBackupDocument } from './mongo/schemas/edi_backup.schema';

// oracle
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EdiRcv } from "./oracle/entities/edi_rcv.entity";

@Injectable()
export class EdiRcvService {
  constructor(
    @InjectModel(EdiBackup.name) private ediBackupModel: Model<EdiBackupDocument>, 
    @InjectRepository(EdiRcv) private ediRcvRepository: Repository<EdiRcv>
  ) {}

  // STEP1. scheduler를 통해 일정주기로 요청되도록 처리
  // STEP2. Oracle의 EDC_EDI_RCV_SBU 데이터 조회
  // STEP3. MongoDB의 EdiBackups에 저장
  // STEP4. Oracle의 데이터 삭제 -- 테스트 중에는 삭제는 하지 않도록 함.
  @Cron(CronExpression.EVERY_5_SECONDS)
  async ediRcvBackup() {
    this.ediRcvRepository
        .find({
          resultTag: 'N'
        })
        .then((rcvDatas: EdiRcv[]) => {
          for (let rd of rcvDatas) {
            this.rcvBackupCreate(rd);
            this.rcvBackupComplete(rd);
          }
        })
  }

  async oracleFindAll(): Promise<EdiRcv[]> {
    return this.ediRcvRepository.find();
  }

  async rcvBackupComplete(ediRcv: EdiRcv) {
    await this.ediRcvRepository.update(
      {
        tmnCod: ediRcv.tmnCod,
        msgSeq: ediRcv.msgSeq,
        docId: ediRcv.docId,
        ptnId: ediRcv.ptnId
      },
      {
        resultTag: 'Y'
      }
    )
  }

  // mongoose
  // create
  async rcvBackupCreate(createEdiRcvDto: EdiBackupDto): Promise<EdiBackup> {
    const createdEdiRcv = new this.ediBackupModel(createEdiRcvDto);
    return createdEdiRcv.save();
  }

  async mongoFindAll(): Promise<EdiRcv[]> {
    return await this.ediBackupModel.find();
  }

  // // read
  // async findOne(tmnCod: string, msgSeq: string, docId: string, ptnId: string): Promise<EdiBackup> {
  //   return this.ediBackupModel.findOne({ tmnCod, msgSeq, docId, ptnId });
  // }

  // // update
  // async updateOne(updateEdiRcvDto: EdiBackupDto) {
  //   await this.ediBackupModel.updateOne(
  //     { 
  //       tmnCod: updateEdiRcvDto.tmnCod, 
  //       msgSeq: updateEdiRcvDto.msgSeq,
  //       docId: updateEdiRcvDto.docId,
  //       ptnId: updateEdiRcvDto.ptnId
  //     }, 
  //     updateEdiRcvDto
  //   );
  // }

  // // delete
  // async deleteOne(tmnCod: string, msgSeq: string, docId: string, ptnId: string) {
  //   await this.ediBackupModel.deleteOne({ tmnCod, msgSeq, docId, ptnId });
  // }
}