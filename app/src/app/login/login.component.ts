import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "./login.service";
import {isNullOrUndefined} from "node:util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {
    this.isLoggedIn = this.loginService.isLoggedIn();
  }

  onSubmit(): void {
    this.loginService.login(this.username, this.password).subscribe(
      response => {
        localStorage.setItem('accessToken', response.access);
        localStorage.setItem('username', this.username);
        this.isLoggedIn = true;
        this.router.navigate(['/']);
        console.log(this.username, this.password)

        this.loginService.refreshToken().subscribe(
          refreshResponse => {
            localStorage.setItem('accessToken', refreshResponse.access)
            localStorage.setItem('refreshToken', refreshResponse.refresh)

            // console.log('Access Token:', refreshResponse.access);
            // console.log('Refresh Token:', refreshResponse.refresh);
          },
          refreshError => {
            console.error("Refresh error: ", refreshError)
          }
        );
      },
      error => {
        console.error('Login error:', error);
      }
    );
  }

  RegisterPage(){
    this.router.navigate(['/register']);
  }

  onLogout(): void {
    this.loginService.logout();
    this.isLoggedIn = false;
  }
}
