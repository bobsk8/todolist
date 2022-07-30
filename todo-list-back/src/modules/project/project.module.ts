import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Project } from 'src/models/project.model';
import { TaskModule } from '../task/task.module';
import { UserModule } from '../user/user.module';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  imports: [
    TaskModule,
    UserModule,
    TypeOrmModule.forFeature([Project])
  ],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
