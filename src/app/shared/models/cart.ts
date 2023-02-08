import { CartItem } from "./CartItem"

export class Cart {
    items: CartItem[] = [];

    get totalPrice(): number { // getter to calculate totalPrice. basically it is a variable but we calculate it each time 
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price
        })

        return totalPrice;
    }
}