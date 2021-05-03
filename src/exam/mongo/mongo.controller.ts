import { MongoDto } from './dto/mongo.dto';
import { Controller, Get, Post, Patch, Delete, Query, Param, Body } from '@nestjs/common';
import { MongoService } from './mongo.service';

@Controller('/mongo')
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}

  @Get()
  getHello(): string {
    return this.mongoService.getHello();
  }

  @Post('/create')
  create(@Body() createMongoDto: MongoDto): any {
    return this.mongoService.create(createMongoDto);
  }

  @Get('/find/:id')
  getFindOneParam(@Param('id') id: string): any {
    return this.mongoService.findOne(+id);
  }

  @Get('/find')
  getFindOneQuery(@Query('id') id: string): any {
    return this.mongoService.findOne(+id);
  }

  @Get('/list')
  getFindAll(): any {
    return this.mongoService.findAll();
  }

  @Patch('/update')
  update(@Body() updateMongoDto: MongoDto): any {
    return this.mongoService.updateOne(updateMongoDto);
  }

  @Delete('/remove')
  deleteOne(@Query('id') id: string): any {
    return this.mongoService.deleteOne(+id);
  }

}
