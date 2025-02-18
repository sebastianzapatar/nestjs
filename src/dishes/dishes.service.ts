import { Injectable } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import dishes,{DishInterface} from './dishes.interface';
@Injectable()
export class DishesService {
  private dishesSushi:DishInterface[]=dishes;
  create(createDishDto: CreateDishDto) {
    let dish:DishInterface={
      id:(this.dishesSushi.length+1).toString(),
      ...createDishDto,
      createAt:new Date(),
      updateAt:new Date()
    }
    this.dishesSushi.push(dish);
    return createDishDto;
  }

  findAll() {
    return this.dishesSushi;
  }

  findOne(id: string) {
    let dish=this.dishesSushi.find(dish=>dish.id==id);
    if(!dish){
      return {error:"No se encontró el plato"};
    }
    return dish;
  }

  update(id: number, updateDishDto: UpdateDishDto) {
    return `This action updates a #${id} dish`;
  }

  remove(id: number) {
    return `This action removes a #${id} dish`;
  }
}
