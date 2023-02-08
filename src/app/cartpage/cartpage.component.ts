import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent {


  constructor(private cartService: CartService){
    this.setCart() //we initialize the cart so we can display it for the first time
  }
//in constructor we get the info from CartService, so this 'cart' is a copy of Cart from CartService
  cart!: Cart;

  setCart(){
    this.cart = this.cartService.getCart();
  };

  removeFromCart(cartItem: CartItem){ //cartItem is got in the html
    this.cartService.removeFromcart(cartItem.food.id);
    this.setCart()
  };

  changeQuantity(cartItem: CartItem, quantityInString:string){ // in html we pass the whole cartItem{} here
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity); // but there we pass id only 
    this.setCart()
  }

}
