import { Food } from "./food";

export class CartItem{

    constructor(food: Food){
        this.food = food; // we will have to pass value 'food' when creating class CartItem
    }

    food: Food;
    quantity: number = 1; // ??? since we define default value, we need constructor / ////

    get price():number{ //every time we call this.price property, it will use the getter 
        return this.food.price * this.quantity;
    }
}