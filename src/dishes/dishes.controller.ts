import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { AuthGuard } from '@nestjs/passport';
import { DictadorGuardGuard } from 'src/dictador-guard/dictador-guard.guard';

@Controller('manuelacancele')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Post(":chefid")
  create(@Body() createDishDto: CreateDishDto,@Param(":chefid") 
  chefid:string) {
    return this.dishesService.create(createDishDto,chefid);
  }

  @Get()
  findAll() {
    return this.dishesService.findAll();
  }
  @UseGuards(AuthGuard())
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dishesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDishDto: UpdateDishDto) {
    return this.dishesService.update(id, updateDishDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  remove(@Param('id') id: string) {
    return this.dishesService.remove(id);
  }
}
