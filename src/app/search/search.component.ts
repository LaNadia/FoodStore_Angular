import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{


  searchTerm: string = '';

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.route.params.subscribe(params => { //this function binds searchTerm in params with this.searchTerm, to display the latter in input, and vice versa
      if(params['searchTerm']){
        this.searchTerm = params['searchTerm'];
      };
    })
  }

  search(): void {
    if(this.searchTerm){
      this.router.navigateByUrl('/search/' + this.searchTerm) // this navigates to a url onclick
    }
  }

}
