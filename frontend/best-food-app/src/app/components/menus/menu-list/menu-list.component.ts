import { MenuService } from 'src/app/services/menu.service';

import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { MenuItem } from 'src/app/shared/models/menu-item.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {
  @Input()
  menuItems!: MenuItem[];

  constructor(private route: ActivatedRoute, private menuService: MenuService) {
    const restaurantId = this.route.snapshot.params['id'];
    this.menuService.getMenuByRestaurantId(+restaurantId).subscribe(
      data => this.menuItems = data,
      error => console.error('Erro ao carregar itens do menu', error)
    );
  }
}
