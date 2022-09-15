import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { TaskFactoryService } from './task-factory.service';
import { TaskUseCases } from './task.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [TaskFactoryService, TaskUseCases],
  exports: [TaskFactoryService, TaskUseCases],
})
export class TaskUseCasesModule {}
