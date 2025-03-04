import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreatePobresincautoDto } from './dto/create-pobresincauto.dto';
import { UpdatePobresincautoDto } from './dto/update-pobresincauto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pobresincauto } from './entities/pobresincauto.entity';
import { Not, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginAuthDto } from './dto/login.dto';
@Injectable()
export class PobresincautosService {
  constructor(
    @InjectRepository(Pobresincauto)
    private pobresincautoRepository:Repository<Pobresincauto>
  ) {}
 async create(createPobresincautoDto: CreatePobresincautoDto) {
    const pobresincauto=this.pobresincautoRepository.create({
      ...createPobresincautoDto,
      password:await bcrypt.hash(createPobresincautoDto.password,10)
    });
    this.pobresincautoRepository.save(pobresincauto);
    return {email:pobresincauto.email};
  }

  findAll() {
    return this.pobresincautoRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} pobresincauto`;
  }

  update(id: number, updatePobresincautoDto: UpdatePobresincautoDto) {
    return `This action updates a #${id} pobresincauto`;
  }

  remove(id: number) {
    return `This action removes a #${id} pobresincauto`;
  }
  async login(loginDto:LoginAuthDto){
    try{
        const {email,password}=loginDto;
        const user=await this.pobresincautoRepository.findOneBy({email});
        if(!user){
          throw new NotFoundException('User not found');
        }
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
          throw new UnauthorizedException('Bad credentials');
        }
        return user;
    }
    catch(e){
      throw new UnauthorizedException('Bad credentials');
    }
  }
}
