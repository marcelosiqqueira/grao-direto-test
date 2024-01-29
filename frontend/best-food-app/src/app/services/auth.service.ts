import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  private isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  canActivate(): boolean {

    if(localStorage.getItem('token')) {
      this.isAuthenticated = true;
    }

    if (!this.isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
