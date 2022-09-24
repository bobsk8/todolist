import { Module } from '@nestjs/common';
import { MysqlDataServicesModule } from '../../infrastructure/data-services/mysql/mysql-data-services.module';

@Module({
  imports: [MysqlDataServicesModule],
  exports: [MysqlDataServicesModule],
})
export class DataServicesModule {}
