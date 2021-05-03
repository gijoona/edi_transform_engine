import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type MongoDocument = Mongo & Document

@Schema()
export class Mongo {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const MongoSchema = SchemaFactory.createForClass(Mongo);