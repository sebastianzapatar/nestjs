import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChefDto } from './dto/create-chef.dto';
import { UpdateChefDto } from './dto/update-chef.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Chef } from './entities/chef.entity';
import { Repository } from 'typeorm';
import { Dish } from 'src/dishes/entities/dish.entity';

@Injectable()
export class ChefService {
  constructor(
    @InjectRepository(Chef)
    private readonly chefRepository:Repository<Chef>,
    @InjectRepository(Dish)
    private readonly dishRepository:Repository<Dish>
  ){
    
  }
  async create(createChefDto: CreateChefDto) {
    const newChef=this.chefRepository.create(createChefDto);
    await this.chefRepository.save(newChef);
    return newChef;
  }

  findAll() {
    return this.chefRepository.find({});
  }

  findOne(id: string) {
    return `This action returns a #${id} chef`;
  }

  update(id: string, updateChefDto: UpdateChefDto) {
    return `This action updates a #${id} chef`;
  }

  remove(id: string) {
    return `This action removes a #${id} chef`;
  }
  async findDishesByChef(chefId:string):Promise<Dish[]>{
    const chef=await this.chefRepository.findOneBy({id:chefId});
    if(!chef){
      throw new NotFoundException('Chef passed away ಥ_ಥ');
    }
    const dishes= await this.dishRepository.find({
      where:{chef:{id:chefId}}
    })
    return dishes;

  }
}
