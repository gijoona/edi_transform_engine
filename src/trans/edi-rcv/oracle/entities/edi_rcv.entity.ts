import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("EDC_EDI_RCV_BACKUP_MSG")
export class EdiRcv {
    @PrimaryColumn({name: 'TMN_COD'})
    tmnCod: string;
    
    @PrimaryColumn({name: 'MSG_SEQ'})
    msgSeq: string;
    
    @Column({name: 'DOC_ID'})
    docId: string;

    @Column({name: 'DOC_COD'})
    docCod: string;

    @Column({name: 'PTN_ID'})
    ptnId: string;

    @Column({name: 'MSG_CONTENTS'})
    contents: string;

    @Column({name: 'RESULT_TAG'})
    resultTag: string;

    @Column({name: 'INPUT_PSN'})
    inputPsn: string;

    @Column({name: 'INPUT_DTE'})
    inputDte: Date;

    @Column({name: 'UPDATE_PSN'})
    updatePsn: string;

    @Column({name: 'UPDATE_DTE'})
    updateDte: Date;

    @Column({name: 'BACKUP_TAG'})
    backupTag: string;

    @Column({name: 'BACKUP_ERR_MSG'})
    backupErrMsg: string;
}