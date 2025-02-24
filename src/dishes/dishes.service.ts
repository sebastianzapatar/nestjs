import { Injectable } from '@nestjs/common';
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
    
  }

  findOne(id: string) {
    
  }

  update(id: number, updateDishDto: UpdateDishDto) {
    return `This action updates a #${id} dish`;
  }

  remove(id: number) {
    return `This action removes a #${id} dish`;
  }
}
