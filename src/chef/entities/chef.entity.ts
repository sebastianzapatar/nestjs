import { Dish } from "src/dishes/entities/dish.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("chefcitos")
export class Chef {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    name:string;
    @Column()
    skill:string;
    @OneToMany(()=>Dish,dish=>dish.chef)
    dishes:Dish[];
    @BeforeInsert()
    nameToUpperCase(){
        this.name=this.name.toUpperCase();
    }
}
