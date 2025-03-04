import { IsEmail, IsString, MinLength, MaxLength, Matches } from "class-validator";

export class CreatePobresincautoDto {
    @IsEmail()
    @IsString()
    email: string;
    @IsString()
    @MinLength(12)
    @MaxLength(50)
    password: string;
    
}
