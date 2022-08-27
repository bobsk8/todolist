import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AuthController } from 'src/modules/auth/auth.controller';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ProjectController } from 'src/modules/project/project.controller';
import { ProjectModule } from 'src/modules/project/project.module';
import { TaskController } from 'src/modules/task/task.controller';
import { TaskModule } from 'src/modules/task/task.module';
import { UserController } from 'src/modules/user/user.controller';
import { UserModule } from 'src/modules/user/user.module';
import { RoleModule } from 'src/modules/role/role.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { RoleController } from 'src/modules/role/role.controller';
import { RolesGuard } from './guards/roles.guard';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT, 10),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASS,
            database: process.env.DATABASE_NAME,
            entities: ["dist/**/*.entity{.ts,.js}"],
            logging: Boolean(process.env.DATABASE_LOGGING),
            migrations: ["dist/migration/*.js"],
            synchronize: false
        }),
        RoleModule,
        UserModule,
        TaskModule,
        ProjectModule,
        AuthModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'client'),
        }),
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
            useClass: RolesGuard,
        },
    ]
})
export class CoreModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes(UserController, ProjectController, TaskController, AuthController, RoleController);
    }
}
