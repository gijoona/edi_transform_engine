import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("EDC_EDI_RCV_BACKUP_MSG")
export class EdiRcv {
    /**
     * 터미널 코드
     * H: HPNT
     * P: PNIT
     */
    @PrimaryColumn({name: 'TMN_COD'})
    tmnCod: string;
    
    /**
     * EDI 송/수신 시 생성되는 SEQ
     * EDI-Engine에서 생성한다.
     */
    @PrimaryColumn({name: 'MSG_SEQ'})
    msgSeq: string;
    
    /**
     * EDI 문서명
     */
    @Column({name: 'DOC_ID'})
    docId: string;
    
    /**
     * EDI 코드
     */
    @Column({name: 'DOC_COD'})
    docCod: string;
    
    /**
     * 송/수신자
     */
    @Column({name: 'PTN_ID'})
    ptnId: string;

    /**
     * R: RECEIVE
     * S: SEND
     */
    @Column({name: 'TRANS_TYP'})
    transTyp: string;

    /**
     * E: EDI
     * X: XML
     */
    @Column({name: 'EDI_TYP'})
    ediTyp: string;

    /**
     * EDI 송/수신 오류 메시지
     */
    @Column({name: 'EDI_ERR_MSG'})
    ediErrMsg: string;

    /**
     * EDI 송/수신 파일내용
     */
    @Column({name: 'EDI_CONTENTS'})
    contents: string;
    
    /**
     * EDI 송/수신 상태
     */
    @Column({name: 'RESULT_TAG'})
    resultTag: string;

    /**
     * ETE 백업결과
     * Y: 백업처리 완료
     * N: 백업처리 미진행
     * E: 백업처리 중 에러. BACKUP_ERR_MSG에 내용 남김
     */
    @Column({name: 'BACKUP_TAG'})
    backupTag: string;
    
    /**
     * ETE 백업처리 중 오류메시지
     */
    @Column({name: 'BACKUP_ERR_MSG'})
    backupErrMsg: string;
    
    @Column({name: 'INPUT_PSN'})
    inputPsn: string;

    @Column({name: 'INPUT_DTE'})
    inputDte: Date;

    @Column({name: 'UPDATE_PSN'})
    updatePsn: string;

    @Column({name: 'UPDATE_DTE'})
    updateDte: Date;
}