import { Injectable } from '@nestjs/common';

@Injectable()
export class ExamService {
  getHello(): string {
    return 'Start EDI-TRANSFORM-ENGINE!';
  }
}
