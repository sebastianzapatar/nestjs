import { Injectable } from '@nestjs/common';
import { CreateChefDto } from './dto/create-chef.dto';
import { UpdateChefDto } from './dto/update-chef.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Chef } from './entities/chef.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChefService {
  constructor(
    @InjectRepository(Chef)
    private readonly chefRepository:Repository<Chef>
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
}
