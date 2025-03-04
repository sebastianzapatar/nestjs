import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishesModule } from './dishes/dishes.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PobresincautosModule } from './pobresincautos/pobresincautos.module';

@Module({
  imports: [DishesModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        autoLoadEntities: true,
        synchronize: true, // Recuerda cambiar a false en producción
      }),
    }),
    UsersModule,
    PobresincautosModule,//Configuracion de la base de datos
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
