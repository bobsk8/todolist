import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { MysqlDataServices } from './mysql-data-services.service';
import { ProjectEntity, RoleEntity, TaskEntity, UserEntity } from './model';
import { I_DATA_SERVICE } from 'src/core';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([
      ProjectEntity,
      RoleEntity,
      TaskEntity,
      UserEntity,
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      database: process.env.DATABASE_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      logging: Boolean(process.env.DATABASE_LOGGING),
      migrations: ['dist/migration/*.js'],
      synchronize: false,
    }),
  ],
  providers: [
    {
      provide: I_DATA_SERVICE,
      useClass: MysqlDataServices,
    },
  ],
  exports: [I_DATA_SERVICE],
})
export class MysqlDataServicesModule {}
