import {Component, OnInit} from '@angular/core';
import { CartItemModel } from './cartItemModel';
import { Service } from './cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: CartItemModel[] = [];
  access_token: string = '';
  refresh_token: string = '';

  constructor(private service: Service) {
  }

  login(username: string, password: string): void {
    this.service.login(username, password).subscribe();
  }

  register(username: string, password: string): void {
    this.service.register(username, password).subscribe((data: any) => {
      this.access_token = data.access;
      this.refresh_token = data.refresh;
    });
  }

}
