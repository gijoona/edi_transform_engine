import { MongoDto } from './dto/mongo.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mongo, MongoDocument } from './schemas/mongo.schema';

@Injectable()
export class MongoService {
  constructor(@InjectModel(Mongo.name) private mongoModel: Model<MongoDocument>) {}

  getHello(): string {
    return 'Start EDI-TRANSFORM-ENGINE!';
  }

  // mongoose
  // create
  async create(createMongoDto: MongoDto): Promise<Mongo> {
    const createdMongo = new this.mongoModel(createMongoDto);
    return createdMongo.save();
  }

  // read
  async findOne(id: number): Promise<Mongo> {
    return this.mongoModel.findOne({ id: id });
  }

  async findAll(): Promise<Mongo[]> {
    return await this.mongoModel.find();
  }

  // update
  async updateOne(updateMongoDto: MongoDto) {
    await this.mongoModel.updateOne({ id: updateMongoDto.id }, updateMongoDto);
  }

  // delete
  async deleteOne(id: number) {
    await this.mongoModel.deleteOne({ id: id });
  }
}
