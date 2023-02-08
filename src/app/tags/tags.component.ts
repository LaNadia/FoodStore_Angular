import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/food';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() // as props (check the html foodpage.componentn.html). here foodPageTags comes to tags.component from foodpage.component
  foodPageTags?: string[];

  @Input()
  justifyContent:string = 'center';

  
  tags?: Tag[];


  constructor(private foodservice: FoodService){}

  ngOnInit(){
    if(!this.foodPageTags){
    this.tags = this.foodservice.getAllTags()
    }
  }

}
