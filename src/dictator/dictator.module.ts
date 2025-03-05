import { Module } from '@nestjs/common';
import { DictatorService } from './dictator.service';
import { DictatorController } from './dictator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dictator } from './entities/dictator.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
@Module({
  controllers: [DictatorController],
  providers: [DictatorService],
  imports: [TypeOrmModule.forFeature([Dictator]),
  PassportModule.register({defaultStrategy:'jwt'}),
  JwtModule.registerAsync({
    imports:[],
    inject:[],
    useFactory:()=>{
      return{
        secret:process.env.SECRET_KEY,
        signOptions:{
          expiresIn:'1h'
        }
      }
    }
  })],
  exports:[TypeOrmModule]
})
export class DictatorModule {}
