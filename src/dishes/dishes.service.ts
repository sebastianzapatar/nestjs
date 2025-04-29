import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import dishes,{DishInterface} from './dishes.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
import { Repository } from 'typeorm';
import { Chef } from 'src/chef/entities/chef.entity';
@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository:Repository<Dish>,
    @InjectRepository(Chef)
    private readonly chefRepository:Repository<Chef>
  ) {}
  
  async create(createDishDto: CreateDishDto, chefID:string) {

    const dish=this.dishRepository.create(createDishDto);
    const chef=await this.chefRepository.findOneBy({id:chefID});
    if(!chef){
      throw new NotFoundException('Chef does not exist');
    }
    dish.chef=chef;
    await this.dishRepository.save(dish);
    return dish;
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
