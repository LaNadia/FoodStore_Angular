import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  //this is the initial Cart
  private cart:Cart = new Cart(); // may be placed in constructor but no diff. there an array of {food+quantity}

  addToCart(food: Food):void { // we pass food
    let cartitem = this.cart.items.find(item => item.food.id === food.id); // we try to find if there are food in the cart, or if it is empty

    if(cartitem){ // if we find the food, we plus quatity
      this.changeQuantity(food.id, cartitem.quantity + 1); // can food.id be replaced with cartitem.food.id ?
      return;
    }
    this.cart.items.push(new CartItem(food)); // this line is as } else {. if we dont find, push food into the array as a new food
  };


  removeFromcart(foodId: number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.food.id != foodId); // we save everything BUT the food we delete
  }

  changeQuantity(foodId: number, quantity:number){
    //here we are able to pass the data by reference. so here we get tha object(we know that objects and arrays are gotten not by value but by referece(полчаемы по ссылке а не по значению))
    //so, we CAN change the variable, and thus change the actial object in the array
    let cartItem = this.cart.items.find(item => item.food.id === foodId); // we find the item in the cart[] by its id
    if(!cartItem) return; //if cartitem = undefined, return
    cartItem.quantity = quantity; // we change cartItem quantity to a 'quantity' prop
  };

  getCart():Cart{
    return this.cart; //show the cart[]
  }
}


