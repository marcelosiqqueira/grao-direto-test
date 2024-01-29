import { Menu } from './../../../../../backend/best-food-app/src/menu/entities/menu.entity';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MenuItem } from '../shared/models/menu-item.model';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) {}

  getMenuByRestaurantId(id: number): Observable<MenuItem[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<MenuItem[]>(`${this.url}/menus/${id}`, { headers });
  }
}
