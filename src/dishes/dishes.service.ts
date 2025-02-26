import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
  ) {}
  
  async create(createDishDto: CreateDishDto) {
    const newDish = this.dishRepository.
    create(createDishDto);
    await this.dishRepository.save(newDish);
    return newDish;
  }

  findAll() {
    const dishes = this.dishRepository.find({});
    return dishes;
  }

  findOne(id: string) {
    const dish = this.dishRepository.findOneBy({id:id});
    if (!dish) {
      throw new NotFoundException(`Dish #${id} not found`);
    }
    return dish;
  }

  async update(id: string, updateDishDto: UpdateDishDto) {

    const product=await this.dishRepository.preload({id:id,...updateDishDto});
    if(!product){
      throw new NotFoundException(`Dish #${id} not found`);
    }
    await this.dishRepository.save(product);
    return product;
  }

  remove(id: string) {
    const dish = this.findOne(id);
    this.dishRepository.delete({id:id})
    return dish;
  }
}
