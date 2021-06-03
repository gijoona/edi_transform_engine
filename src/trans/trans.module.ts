import { Module } from "@nestjs/common";
import { EdiRcvModule } from "./edi-rcv/edi-rcv.module";

@Module({
  imports: [
    EdiRcvModule
  ]
})

export class TransModule {}