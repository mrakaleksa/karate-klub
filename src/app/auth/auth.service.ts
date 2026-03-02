import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(email: string, password: string) {
    
    if (email === 'admin@test.com' && password === '123456') {
      localStorage.setItem('token', 'my-token');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
