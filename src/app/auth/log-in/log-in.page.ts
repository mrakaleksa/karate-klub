import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin() {

    this.authService.login(this.email, this.password)
      .subscribe((res: any) => {

        console.log(res);

        localStorage.setItem('token', res.idToken);

        this.router.navigate(['/home']);

      }, error => {
        console.error(error);
      });
  }
}
