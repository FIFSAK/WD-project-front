import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.loginService.register(this.username, this.password).subscribe(
      response => {
        console.log('API Response:', response);
        this.router.navigate(['/login']);
      },
      error => {
        if (error.status === 400 && error.error.username) {
          this.errorMessage = error.error.username[0];
        } else {
          this.errorMessage = 'Registration failed';
        }
      }
    );
  }
}
