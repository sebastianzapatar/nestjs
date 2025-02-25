import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();//Que cualquier app pueda conectarse a mi app
  app.useGlobalPipes(//Validar los datos que llegan a la app
    new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    },
  ));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
