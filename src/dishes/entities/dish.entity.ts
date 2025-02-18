export class Dish {
    id:string;
    name:string;
    price:number;
    description:string;
    image:string;
    createAt?:Date;
    updateAt?:Date;
}
//Se crea la tabla desde acá, el id se genera automáticamente