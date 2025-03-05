import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DictatorService } from './dictator.service';
import { CreateDictatorDto } from './dto/create-dictator.dto';
import { UpdateDictatorDto } from './dto/update-dictator.dto';

@Controller('dictator')
export class DictatorController {
  constructor(
    private readonly dictatorService: DictatorService) {}

  @Post()
  create(@Body() createDictatorDto: CreateDictatorDto) {
    return this.dictatorService.create(createDictatorDto);
  }

  @Get()
  findAll() {
    return this.dictatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dictatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDictatorDto: UpdateDictatorDto) {
    return this.dictatorService.update(+id, updateDictatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dictatorService.remove(+id);
  }
  @Post('login')
  login(@Body() loginDTO){
    return this.dictatorService.login(loginDTO);
  }
}
