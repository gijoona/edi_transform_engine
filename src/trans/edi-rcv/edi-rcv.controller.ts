import { EdiRcvService } from './edi-rcv.service';
import { Controller, Get } from '@nestjs/common';

@Controller('/ediRcv')
export class EdiRcvController {
  constructor(private readonly ediRcvService: EdiRcvService) {}

  @Get('/oracle/findAll')
  oraclefindAll() {
    return this.ediRcvService.oracleFindAll();
  }

  @Get('/mongo/findAll')
  mongofindAll() {
    return this.ediRcvService.mongoFindAll();
  }
}