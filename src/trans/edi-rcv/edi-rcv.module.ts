// common
import { Module } from "@nestjs/common";

// mongo
import { MongoConfig } from 'src/conf/mongo.config';
import { MongooseModule } from '@nestjs/mongoose';
import { EdiBackup, EdiBackupSchema } from './mongo/schemas/edi_backup.schema';

// oracle
import { TypeOrmModule } from '@nestjs/typeorm';
import { OracleConfig } from 'src/conf/oracle.config';
import { EdiRcv } from './oracle/entities/edi_rcv.entity';

// service
import { EdiRcvController } from './edi-rcv.controller';
import { EdiRcvService } from './edi-rcv.service';

@Module({
  imports: [    
    MongooseModule.forRootAsync({
      useClass: MongoConfig
    }),
    TypeOrmModule.forRootAsync({
      useClass: OracleConfig
    }),
    MongooseModule.forFeature([{ name: EdiBackup.name, schema: EdiBackupSchema }]),
    TypeOrmModule.forFeature([EdiRcv])
  ],
  controllers: [EdiRcvController],
  providers: [EdiRcvService]
})

export class EdiRcvModule {}