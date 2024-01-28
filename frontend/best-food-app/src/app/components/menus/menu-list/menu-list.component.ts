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

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) {
    const restaurantId = this.route.snapshot.params['id'];
    this.menuItems = this.restaurantService.getMenuByRestaurantId(restaurantId);
  }
}
