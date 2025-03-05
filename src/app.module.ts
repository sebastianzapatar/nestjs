import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishesModule } from './dishes/dishes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import { DictatorModule } from './dictator/dictator.module';
@Module({
  imports: [DishesModule,ConfigModule.forRoot(),//Me permite usar variables de entorno
    TypeOrmModule.forRoot({//Configuración de la base de datos
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true, // Recuerda cambiar a false en producción
    }), DictatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
