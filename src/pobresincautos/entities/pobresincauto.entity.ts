import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Pobresincauto {

    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column('text',{
        default:'xxx@xx.com',
        unique:true
    })
    email:string;
    @Column('text',{
        default:'123456'
    })
    password:string;
    @Column('text',{
        default:'user'
    })
    role?:string;
}
