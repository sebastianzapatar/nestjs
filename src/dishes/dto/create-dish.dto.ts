import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateDishDto {
    @IsString()
    readonly name: string;
    @IsNumber()
    readonly price: number;
    @IsString()
    @MinLength(10)
    readonly  description: string;
    @IsString()
    @MinLength(10)
    readonly image: string;
    createAt?: Date;
    updateAt?: Date;
}
//Esto es lo que recibe mi api cuando se crea un nuevo plato
