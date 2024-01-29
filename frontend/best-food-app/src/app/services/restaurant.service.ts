import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../shared/models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) {}

  getRestaurantById(id: number): Observable<Restaurant> {
    const url = `${this.url}/restaurants/${id}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Restaurant>(url, { headers });
  }

  getAll(): Observable<Restaurant[]> {
    const url = `${this.url}/restaurants`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Restaurant[]>(url, { headers });
  }
}
