import { Component, EventEmitter, Output } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { SearchResult } from '../../shared/models/search-result.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private readonly restaurantService: RestaurantService) {}

  @Output() onSearch = new EventEmitter<any>();

  pesquisa: string = '';

  verificarPesquisa() {

    if(this.pesquisa.length < 4){
      this.onSearch.emit({restaurants: [], menuItems: [], pesquisa:this.pesquisa});
      return;
    }

    this.restaurantService.getItemsByTerm(this.pesquisa).subscribe({
      next : (res: SearchResult)  => {
        let response:any = res;
        response['pesquisa'] = this.pesquisa
        this.onSearch.emit(response )
      }, error : (err) => {
      }
    })
  }

}

