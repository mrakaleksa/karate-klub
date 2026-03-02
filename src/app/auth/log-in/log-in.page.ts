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

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.email, this.password);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  ngOnInit() {
  }

}
