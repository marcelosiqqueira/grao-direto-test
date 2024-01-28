import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { MenuItem } from 'src/app/shared/models/menu-item.model';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css']
})
export class MenuListItemComponent implements OnInit{
  @Input()
  menuItems!: MenuItem[];

  @Input()
  restaurantInfo!: any;

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) { }

  ngOnInit() {
    const restaurantId = this.route.snapshot.paramMap.get('id');
    if (restaurantId) {
      this.menuItems = this.restaurantService.getMenuByRestaurantId(+restaurantId);
      this.restaurantInfo = this.restaurantService.getInfoRestaurantById(+restaurantId);
    }
  }
}
