import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type EdiBackupDocument = EdiBackup & Document

@Schema()
export class EdiBackup {
  @Prop()
  tmnCod: string;
  
  @Prop()
  msgSeq: string;
  
  @Prop()
  docId: string;

  @Prop()
  docCod: string;

  @Prop()
  ptnId: string;

  @Prop()
  contents: string;

  @Prop()
  resultTag: string;

  @Prop()
  inputPsn: string;

  @Prop()
  inputDte: Date;

  @Prop()
  updatePsn: string;

  @Prop()
  updateDte: Date;

  @Prop()
  backupTag: string;

  @Prop()
  backupErrMsg: string;
}

export const EdiBackupSchema = SchemaFactory.createForClass(EdiBackup);