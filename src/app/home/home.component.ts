import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  food: Food[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute){}

  ngOnInit(): void{

    // we subscribe to path:{ } of HomeComponent routes and implement this every time it changes. 
    this.route.params.subscribe(params => {
      if(params['searchTerm']) { // if we have got /:searchTerm in router params, we implement this: 
          this.food = this.foodService.getAllBySearchTerm(params['searchTerm'])
      } else if(params['tag']) { // here we ask if params have /:tag (/tag/ before it doesnt count?)
         this.food = this.foodService.getAllByTag(params['tag'])
      } else { 
          this.food = this.foodService.getAll(); // if we got no 'searchItem' in params, we just return all the food
      }
    });
      
  }

}
