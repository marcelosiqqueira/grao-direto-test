import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from 'src/app/shared/models/restaurant.model';

@Component({
  selector: 'app-restaurant-list-item',
  templateUrl: './restaurant-list-item.component.html',
  styleUrls: ['./restaurant-list-item.component.css']
})
export class RestaurantListItemComponent {
  @Input()
  restaurant!: Restaurant;

  constructor(private router: Router) {}

  navigateToMenu() {
    this.router.navigate(['/menu', this.restaurant.id]);
  }
}
