import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDictatorDto } from './dto/create-dictator.dto';
import { UpdateDictatorDto } from './dto/update-dictator.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dictator } from './entities/dictator.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';//Para encriptar
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/interface/JwtPayload';
@Injectable()
export class DictatorService {
  constructor(
    @InjectRepository(Dictator)
    private readonly dictatorRepository:Repository<Dictator>,

    private readonly jwtService:JwtService

  ){}
  async create(createDictatorDto: CreateDictatorDto) {
    try{
      const dictator=
        this.dictatorRepository.create({
          ...createDictatorDto,
          password:bcrypt.hashSync(createDictatorDto.password,10)
        });
      await this.dictatorRepository.save(dictator);
      return dictator;
    }
    catch(error){
      throw new Error(error);
    }

    
  }
  private getJwtToken(jwtPayload:JwtPayload){
    const token=this.jwtService.sign(jwtPayload);
    return token;
  }
  async login(loginDTO:LoginDTO){
    const {email,password}=loginDTO;
    const dictator=await this.dictatorRepository.
    findOneBy({email:email});
    if(!dictator){
      throw new NotFoundException('Invalid credentials');
    }
    const valid=bcrypt.compareSync(password,dictator.password);
    if(!valid){
      throw new NotFoundException('Invalid credentials');
    }
    const jwtPayload:JwtPayload={email,role:dictator.rol};
    const token=this.getJwtToken(jwtPayload);
    return {dictator,token};
  }
  findAll() {
    return this.dictatorRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} dictator`;
  }

  update(id: number, updateDictatorDto: UpdateDictatorDto) {
    return `This action updates a #${id} dictator`;
  }

  remove(id: number) {
    return `This action removes a #${id} dictator`;
  }
}
