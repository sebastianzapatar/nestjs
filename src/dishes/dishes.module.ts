import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
import { DictatorModule } from 'src/dictator/dictator.module';
import { Chef } from 'src/chef/entities/chef.entity';


@Module({
  controllers: [DishesController],
  providers: [DishesService],
  imports: [TypeOrmModule.forFeature([Dish,Chef]),DictatorModule],
  exports:[TypeOrmModule]
})
export class DishesModule {}
