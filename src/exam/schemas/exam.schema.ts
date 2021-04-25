import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ExamDocument = Exam & Document

@Schema()
export class Exam {
  @Prop()
  nama: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const ExamSchema = SchemaFactory.createForClass(Exam);