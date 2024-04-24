import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "./login.service";

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

  ngOnInit(): void {
    this.loginService.refreshToken().subscribe(
      () => {
        console.log('Tokens refreshed successfully');
      },
      error => {
        console.error('Error refreshing tokens:', error);
      }
    );
  }

  onSubmit(): void {
    this.loginService.login(this.username, this.password).subscribe(
      response => {
        localStorage.setItem('userToken', response.access);
        localStorage.setItem('username', this.username);
        this.isLoggedIn = true;
        this.router.navigate(['/']);
        console.log(this.username, this.password)
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
