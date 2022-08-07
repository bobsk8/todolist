import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
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
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { LoggerMiddleware } from './middlewares/logger.middleware';

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
            entities: ["dist/**/*.model{.ts,.js}"],
            logging: Boolean(process.env.DATABASE_LOGGING),
            migrations: ["migration/*.js"],
            synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE)
        }),
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
    ]
})
export class CoreModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes(UserController, ProjectController, TaskController, AuthController);
    }
}
