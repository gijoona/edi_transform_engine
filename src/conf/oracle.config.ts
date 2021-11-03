import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class OracleConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'oracle',
      username: 'PSATOS',
      // TEST
      // password: 'psa!2#$1',
      // connectString: '172.16.3.103:1521/PSADEVDB',
      // REAL
      password: 'Psatos4%6!',
      connectString: '172.16.3.231:1521/PSADB',
      autoLoadEntities: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}']
    }
  }
}