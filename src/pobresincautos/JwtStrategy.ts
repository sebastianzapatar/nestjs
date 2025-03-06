import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { BadRequestException, Injectable } from "@nestjs/common";
import { Pobresincauto } from "./entities/pobresincauto.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { JwtPayload } from "./interfaces/jwtPayload";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(Pobresincauto)
        private readonly probreIncautoRepository:Repository<Pobresincauto>

    ){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:process.env.SECRET_PASSWORD
        });
    }
    async validate(payload:JwtPayload){
        const {email}=payload;
        const user=await this.probreIncautoRepository.findOneBy({email});
        if(!user){
            return new BadRequestException('User not found');
        }
        return user;
    }
}