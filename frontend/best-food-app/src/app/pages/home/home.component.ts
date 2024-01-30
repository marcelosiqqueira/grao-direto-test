import { Component } from '@angular/core';
import { SearchResult } from 'src/app/shared/models/search-result.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  view: number = 1;

  searchResult!: any;

  changeView(searchResult: any) {

    if(searchResult.pesquisa.length > 3 ) {
      this.view = 2;
      this.searchResult = searchResult;
      return;
    }

    if(searchResult.menuItems.length == 0 && searchResult.restaurants.length == 0) {
      this.view = 1;
      this.searchResult = searchResult;
      return;
    }
  }
}
