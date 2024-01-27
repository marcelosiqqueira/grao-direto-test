import { Restaurant } from './../../../shared/models/restaurant.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{
  restaurants: Restaurant[] = [];
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurants = this.restaurantService.getAll();
  }
}
