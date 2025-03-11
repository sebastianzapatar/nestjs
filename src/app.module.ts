import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishesModule } from './dishes/dishes.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DictatorModule } from './dictator/dictator.module';
import { ChefModule } from './chef/chef.module';
@Module({
  
  imports: [DishesModule,ConfigModule.forRoot(),//Me permite usar variables de entorno
    TypeOrmModule.forRoot({//Configuración de la base de datos
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true, // Recuerda cambiar a false en producción
    }), DictatorModule, ChefModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
