import { MiddlewareConsumer, Module } from '@nestjs/common';

import {
  AuthController,
  ProjectController,
  RoleController,
  TaskController,
  UserController,
} from './controllers';
import {
  AuthUseCasesModule,
  ProjectUseCasesModule,
  RoleUseCasesModule,
  TaskUseCasesModule,
  UserUseCasesModule,
} from './use-cases';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CoreModule } from './core/core.module';
import { DataServicesModule } from './services/data-services/data-services.module';

@Module({
  imports: [
    CoreModule,
    DataServicesModule,
    AuthUseCasesModule,
    RoleUseCasesModule,
    TaskUseCasesModule,
    UserUseCasesModule,
    ProjectUseCasesModule,
  ],
  controllers: [
    AuthController,
    ProjectController,
    RoleController,
    TaskController,
    UserController,
  ],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        UserController,
        ProjectController,
        TaskController,
        AuthController,
        RoleController,
      );
  }
}
