import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TaskModule } from './modules/task/task.module';
import { ProjectModule } from './modules/project/project.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule, 
    TaskModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
