export class EdiBackupDto {
  readonly tmnCod: string;
  readonly msgSeq: string;
  readonly docId: string;
  readonly docCod: string;
  readonly ptnId: string;
  readonly contents: string;
  readonly resultTag: string;
  readonly inputPsn: string;
  readonly inputDte: Date;
  readonly updatePsn: string;
  readonly updateDte: Date;
  readonly backupTag: string;
  readonly backupErrMsg: string;
}