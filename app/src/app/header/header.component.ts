import { Component } from '@angular/core';
import {Clothes} from "../clothes/models";
import {StartPageService} from "../start-page/start-page.service";
import {Router} from "@angular/router";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLoggedIn: boolean = false;
  username: string = '';


  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    if (this.isLoggedIn) {
      this.username = this.loginService.getUsername();
    }
  }

  onLogout(): void {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  CartPage(){
    this.router.navigate(['/cart']);
  }

  LoginPage(){
    this.router.navigate(['/login']);
  }

  RegisterPage(){
    this.router.navigate(['/register']);
  }
}
