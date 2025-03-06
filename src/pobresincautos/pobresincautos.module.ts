import { Module } from '@nestjs/common';
import { PobresincautosService } from './pobresincautos.service';
import { PobresincautosController } from './pobresincautos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pobresincauto } from './entities/pobresincauto.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './JwtStrategy';

@Module({
  controllers: [PobresincautosController],
  providers: [PobresincautosService],
  imports: [TypeOrmModule.forFeature([Pobresincauto]),
  PassportModule.register({defaultStrategy:'jwt'}),
  JwtModule.registerAsync({//Es asyn para esperar que cargue toda la app
    imports:[],
    inject:[],
    useFactory:()=>{
      return{
        secret:process.env.SECRET_PASSWORD,
        signOptions:{
          expiresIn:'1m'
        }
      }
    }
  })],

  exports: [TypeOrmModule,PassportModule, JwtModule],
})
export class PobresincautosModule {}
