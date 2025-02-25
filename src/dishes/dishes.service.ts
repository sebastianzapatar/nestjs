import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import dishes,{DishInterface} from './dishes.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
import { Repository } from 'typeorm';
@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository:Repository<Dish>
  ) {}
  
  async create(createDishDto: CreateDishDto) {
    const product=this.dishRepository.create(createDishDto);
    await this.dishRepository.save(product);
    return product;
  }

 async findAll() {
    const dishes=await this.dishRepository.find({});
    return dishes;
  }

  async findOne(id: string) {
    const producto=await this.dishRepository.findOneBy({id:id});
    if(!producto){
      throw new NotFoundException(`Dish #${id} not found`);
    }
    return producto;
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
    const product=this.findOne(id);
    this.dishRepository.delete({id:id}); 
    return product;
  }
}
