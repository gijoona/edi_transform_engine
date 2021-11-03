import { Injectable } from "@nestjs/common";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";

@Injectable()
export class MongoConfig implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      // uri: 'mongodb://hitops:storagepwd@172.16.3.90:27017/EDI' // TEST
      uri: 'mongodb://hitops:storagepwd@172.16.3.108:27017/EDI' // REAL
    }
  }
}