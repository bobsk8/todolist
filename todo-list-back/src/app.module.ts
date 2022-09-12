import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { join } from 'path';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import {
  AuthController,
  ProjectController,
  RoleController,
  TaskController,
  UserController
} from './controllers';

import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { DataServicesModule } from './services/data-services/data-services.module';
import { AuthUseCasesModule } from './use-cases/auth/auth-use-cases.module';
import { ProjectUseCasesModule } from './use-cases/project/author-use-cases.module';
import { RoleUseCasesModule } from './use-cases/role/role-use-cases.module';
import { TaskUseCasesModule } from './use-cases/task/task-use-cases.module';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';

@Module({
  imports: [
    DataServicesModule,
    AuthUseCasesModule,
    RoleUseCasesModule,
    TaskUseCasesModule,
    UserUseCasesModule,
    ProjectUseCasesModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 20,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [
    AuthController,
    ProjectController,
    RoleController,
    TaskController,
    UserController
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(UserController, ProjectController, TaskController, AuthController, RoleController);
  }
}
