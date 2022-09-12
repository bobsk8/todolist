import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { ProjectFactoryService } from './project-factory.service';
import { ProjectUseCases } from './project.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [ProjectFactoryService, ProjectUseCases],
  exports: [ProjectFactoryService, ProjectUseCases],
})
export class ProjectUseCasesModule {}
