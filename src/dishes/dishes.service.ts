import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
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
  
  async create(createDishDto: CreateDishDto, chefId: string) {
     // Creamos la instancia del dish a partir del DTO
  const newDish = this.dishRepository.create(createDishDto);

  // Obtenemos el chef utilizando el chefId (podrías inyectar el repositorio del chef o usar otro servicio)
  const chef = await this.chefRepository.findOneBy({ id: chefId });
  if (!chef) {
    throw new NotFoundException(`Chef #${chefId} not found`);
  }

  // Asignamos el chef a la nueva instancia de dish
  newDish.chef = chef;

  // Guardamos la instancia en la base de datos
  await this.dishRepository.save(newDish);
  return newDish;
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
