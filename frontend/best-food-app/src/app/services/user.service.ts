import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface UserLogin {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) {}

  login(userLogin: UserLogin) {
    const url = this.url + '/auth/login';
    return this.http.post(url, userLogin);
  }

}
