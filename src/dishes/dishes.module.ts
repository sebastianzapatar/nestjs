import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';

@Module({
  controllers: [DishesController],
  providers: [DishesService],
})
export class DishesModule {}
