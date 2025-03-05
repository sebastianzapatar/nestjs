import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateDictatorDto {
    @IsString()
    @MinLength(2)
    private readonly name: string;


    @IsEmail()
    private readonly email: string;

    @IsString()
    @MinLength(12)
    password: string;
}
