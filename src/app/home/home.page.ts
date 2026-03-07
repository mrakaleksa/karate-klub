import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  firstName: string = '';
  lastName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    console.log('User from localStorage:', this.authService.getCurrentUser());
    const user = this.authService.getCurrentUser();
    if (user) {
      this.firstName = user.firstName;
      this.lastName = user.lastName;
    }
  }

}
