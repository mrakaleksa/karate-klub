import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegister() {
    if (!this.registerForm.valid) return;

    const { firstName, lastName, email, password } = this.registerForm.value;

    this.authService.register(email, password).subscribe(
      (res: any) => {
        const userId = res.localId;

        this.authService.saveUserData(userId, {
          firstName,
          lastName,
          email
        }).subscribe(
          () => {
            console.log("User created");
            this.registerForm.reset();
            this.router.navigate(['/login']);
          },
          (err) => console.error('Error saving user data:', err)
        );
        
      },
      (error) => console.error('Registration error:', error)
    );
  }
}