import { IsString } from "class-validator";

export class CreateChefDto {
    @IsString()
    name:string;
    @IsString()
    skill:string;
}
