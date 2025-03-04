import { Module } from '@nestjs/common';
import { PobresincautosService } from './pobresincautos.service';
import { PobresincautosController } from './pobresincautos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pobresincauto } from './entities/pobresincauto.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [PobresincautosController],
  providers: [PobresincautosService],
  imports: [TypeOrmModule.forFeature([Pobresincauto])],
  exports: [TypeOrmModule],
})
export class PobresincautosModule {}
