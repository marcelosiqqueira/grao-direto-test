import { Component } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/restaurant.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchResult!: Restaurant[];

  onSearchReceived(result: Restaurant[]): void {
    this.searchResult = result;
  }
}
