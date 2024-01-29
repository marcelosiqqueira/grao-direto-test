import { Restaurant } from './../../../shared/models/restaurant.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.getAll().subscribe(
      (data) => {
        this.restaurants = data;
      },
      (error) => {
        console.error('Erro ao carregar restaurantes', error);
      }
    );
  }
}
