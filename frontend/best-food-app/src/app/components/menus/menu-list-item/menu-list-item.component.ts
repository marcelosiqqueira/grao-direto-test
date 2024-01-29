import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { MenuItem } from 'src/app/shared/models/menu-item.model';
import { Restaurant } from 'src/app/shared/models/restaurant.model';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css']
})
export class MenuListItemComponent implements OnInit{
  @Input()
  menuItems!: MenuItem[];

  @Input()
  restaurantInfo!: Restaurant;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    const restaurantId = this.route.snapshot.paramMap.get('id');
    if (restaurantId) {
        this.restaurantService.getRestaurantById(+restaurantId).subscribe(
        data => this.restaurantInfo = data,
        error => console.error('Erro ao carregar informações do restaurante', error)
      );
    }
  }
}
