import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("EDI_BACKUP_DATA")
export class EdiBackupData {
    @PrimaryColumn({name: 'TMN_COD'})
    tmnCod: string;
    
    @PrimaryColumn({name: 'MSG_SEQ'})
    msgSeq: string;
    
    @Column({name: 'TYPE'})
    type: string;

    @Column({name: 'DOC_ID'})
    docId: string;

    @Column({name: 'DOC_COD'})
    docCod: string;

    @Column({name: 'PTN_ID'})
    ptnId: string;

    @Column({name: 'CONTENTS'})
    contents: string;
}