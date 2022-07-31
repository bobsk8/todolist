import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Todo')
    .setDescription('The todo API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);  
  await app.listen(3000);
}
bootstrap();
