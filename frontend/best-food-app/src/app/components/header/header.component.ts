import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UserService } from 'src/app/services/user.service';
import { Restaurant } from 'src/app/shared/models/restaurant.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly router: Router
  ) {}

  @Output() onSearch = new EventEmitter<any>();

  term: string = '';

  userName: string | null = localStorage.getItem('name');

  isHomeRoute(): boolean {
    return this.router.url === '/home';
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  verifyTerm() {

    if(this.term.length < 3){
      this.restaurantService.getAll().subscribe({
        next : (res: Restaurant[])  => {
          this.onSearch.emit(res)
        }, error : (err) => {
        }
      });
      return;
    }

    this.restaurantService.getItemsByTerm(this.term).subscribe({
      next : (res: Restaurant[])  => {
        this.onSearch.emit(res)
      }, error : (err) => {
      }
    });
  }
}

