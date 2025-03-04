import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PobresincautosService } from './pobresincautos.service';
import { CreatePobresincautoDto } from './dto/create-pobresincauto.dto';
import { UpdatePobresincautoDto } from './dto/update-pobresincauto.dto';

@Controller('pobresincautos')
export class PobresincautosController {
  constructor(private readonly pobresincautosService: PobresincautosService) {}

  @Post()
  create(@Body() createPobresincautoDto: CreatePobresincautoDto) {
    return this.pobresincautosService.create(createPobresincautoDto);
  }

  @Get()
  findAll() {
    return this.pobresincautosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pobresincautosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePobresincautoDto: UpdatePobresincautoDto) {
    return this.pobresincautosService.update(+id, updatePobresincautoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pobresincautosService.remove(+id);
  }
}
