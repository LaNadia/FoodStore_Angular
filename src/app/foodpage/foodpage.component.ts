import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  food!: Food;

  constructor(private route: ActivatedRoute,
    private foodservice: FoodService,
    private cartService: CartService,
    private router: Router){
    route.params.subscribe((params) => {
      if(params['id']) {
        this.food = foodservice.getFoodById(params['id'])
      }
    })
  }

  ngOnInit(){}

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }

}
