import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();//Que cualquier app pueda conectarse a mi app
  const config=new DocumentBuilder()
  .setTitle('API')
  .setDescription('API de ejemplo')
  .setVersion('1.0')
  .addTag('API')
  .build();
  app.useGlobalPipes(//Validar los datos que llegan a la app
    new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    },
  ));
  const document=SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
