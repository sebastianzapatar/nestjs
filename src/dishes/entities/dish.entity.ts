import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('dishes')
export class Dish {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column('text',{
        unique:true,
        nullable:false,
    })
    name:string;
    @Column('numeric',{
        nullable:false,
        default:0
    })
    price:number;
    @Column('text',{
        nullable:false,
    })
    description:string;
    @Column('text',{
        nullable:false,
    })  
    image:string;
    @Column('date',{
        nullable:false,
        default:()=> 'CURRENT_TIMESTAMP'
    })
    createAt?:Date;
    @Column('date',{
        nullable:false,
        default:()=> 'CURRENT_TIMESTAMP'
    })
    updateAt?:Date;
}
