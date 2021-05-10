import { Controller, Get, Post, Patch, Delete, Query, Param, Body } from "@nestjs/common";
import { EdiBackupDataService } from "./edi_backup_data.service";

@Controller('/edi')
export class EdiBackupDataController {
  constructor(private readonly ediBackupDataService: EdiBackupDataService) {}

  @Get('/list')
  getFindAll(): any {
    return this.ediBackupDataService.findAll();
  }
}