import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('dictator')
export class Dictator {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text',{
        nullable:true
    })
    name:string;

    @Column('text',{
        unique:true,
        nullable:true
    })
    email:string;

    @Column('text',{
        nullable:true
    })
    password:string;

    @Column('text',{
        default:'Admin'
    })
    rol?:string;

}
