import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('dishes')
export class Dish {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column('text',{
        default:'Manuela va a perder',
        unique:true
    })
    name?:string;
    @Column('numeric',{
        default:0
    })
    price:number;
    @Column('text',{
        default:'El mejor sushi de la HDP historia'
    })
    description:string;
    @Column('text',{
        default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F338192253'
        })
    image:string;
    @Column('date',{
        default:()=> 'CURRENT_TIMESTAMP'
    })
    createAt?:Date;
    @Column('date',{
        default:()=> 'CURRENT_TIMESTAMP'
    })
    updateAt?:Date;
}
//Se crea la tabla desde acá, el id se genera automáticamente