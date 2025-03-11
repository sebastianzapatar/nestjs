import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('dictator')
export class Dictator {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text')
    name:string;

    @Column('text',{
        unique:true
    })
    email:string;

    @Column('text')
    password:string;

    @Column('text',{
        default:'Admin'
    })
    rol?:string;

}
