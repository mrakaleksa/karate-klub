import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
  standalone: false
})
export class LogInPage implements OnInit {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient 
  ) {}

  ngOnInit() {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (res: any) => {
        console.log('Login response:', res);
        localStorage.setItem('token', res.idToken);

        
        this.http.get(`${this.authService.getDatabaseUrl()}/users/${res.localId}.json`).subscribe(
          (userData: any) => {
            console.log('User data:', userData);
            localStorage.setItem('user', JSON.stringify(userData));
            this.router.navigate(['/home']);
          },
          (err) => console.error('Error fetching user data:', err)
        );
        this.email = '';
        this.password = '';
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}
