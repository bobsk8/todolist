import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './modules/user/user.module';
import { TaskModule } from './modules/task/task.module';
import { ProjectModule } from './modules/project/project.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule, 
    TaskModule, ProjectModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
