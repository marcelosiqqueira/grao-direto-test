import { Restaurant } from './../../../shared/models/restaurant.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit, OnChanges {
  restaurants: Restaurant[] = [];

  constructor(
    private restaurantService: RestaurantService
  ) {}

  @Input() searchResult!: Restaurant[];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchResult']) {
      this.restaurants = this.searchResult;
    }
  }

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
