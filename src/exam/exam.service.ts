import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exam, ExamDocument } from './schemas/exam.schema';

@Injectable()
export class ExamService {
  constructor(@InjectModel(Exam.name) private examModel: Model<ExamDocument>) {}

  getHello(): string {
    return 'Start EDI-TRANSFORM-ENGINE!';
  }

  async findAll(): Promise<Exam[]> {
    return this.examModel.find().exec();
  }
}
