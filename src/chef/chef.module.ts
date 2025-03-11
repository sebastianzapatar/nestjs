import { Module } from '@nestjs/common';
import { ChefService } from './chef.service';
import { ChefController } from './chef.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chef } from './entities/chef.entity';
import { DictatorModule } from 'src/dictator/dictator.module';
import { Dish } from 'src/dishes/entities/dish.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Chef,Dish]),DictatorModule],
  controllers: [ChefController],
  providers: [ChefService],
  exports:[ChefService,TypeOrmModule]
})
export class ChefModule {}
