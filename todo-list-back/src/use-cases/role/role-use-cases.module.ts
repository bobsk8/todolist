import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { RoleFactoryService } from './role-factory.service';
import { RoleUseCases } from './role.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [RoleFactoryService, RoleUseCases],
  exports: [RoleFactoryService, RoleUseCases],
})
export class RoleUseCasesModule {}
