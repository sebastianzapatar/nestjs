import { Dish } from "./entities/dish.entity";

export interface DishInterface {
    id:string;
    name:string;
    price:number;
    description:string;
    image:string;
    createAt?:Date;
    updateAt?:Date;
}
let dishes:DishInterface[]=[
    {
        id:"1",
        name:"Pizza",
        price:10,
        description:"Pizza de peperoni",
        image:"https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
        createAt:new Date(),
        updateAt:new Date()
    },
    {
        id:"2",
        name:"Hamburguesa",
        price:5,
        description:"Hamburguesa de carne",
        image:"https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
        createAt:new Date(),
        updateAt:new Date()
    },
    
]
export default dishes;