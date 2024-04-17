import {Component, OnInit} from '@angular/core';
import {CartItemModel} from './cartItemModel';
import {Service} from './cart.service';

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
    this.service.login(username, password).subscribe((data: any) => {
      this.access_token = data.access;
      this.refresh_token = data.refresh;
    });
    ;
  }

  register(username: string, password: string): void {
    this.service.register(username, password).subscribe();
  }

  getCartItems(): void {
    this.service.getCartItems(this.access_token).subscribe(cartItems => this.cartItems = cartItems);
  }

  postCariItems(clothes_id: number, size: string): void {
    this.service.postCariItems(clothes_id, size, this.access_token).subscribe();
  }

  putCartItem(cariItem_id: number, size: string, quantity: number=1): void {
    this.service.putCariItem(quantity, size, cariItem_id, this.access_token).subscribe();
  }

  deleteCariItem(cariItem_id: number): void {
    this.service.deleteCariItem(cariItem_id, this.access_token).subscribe();
  }
}
