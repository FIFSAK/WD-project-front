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
  access_token: string | null = null;
  refresh_token: string = '';
  loginInput: string = '';
  passwordInput: string = '';

  constructor(private service: Service) {
  }

  ngOnInit() {
    this.access_token = localStorage.getItem('access_token');
    if (this.access_token) {
      this.getCartItems();
    }
  }

  login(username: string, password: string): void {
    this.service.login(username, password).subscribe((data: any) => {
      this.access_token = data.access;
      this.refresh_token = data.refresh;
      if (typeof this.access_token === "string") {
        localStorage.setItem('access_token', this.access_token);
      }
      console.log(this.access_token);
      this.getCartItems();
    });
  }

  register(username: string, password: string): void {
    this.service.register(username, password).subscribe();
  }

  getCartItems(): void {
    if (!this.access_token) return;
    this.service.getCartItems(this.access_token).subscribe({
      next: (data: any) => {
        this.cartItems = data.results;
        console.log('Cart Items:', this.cartItems);
      },
      error: (error) => {
        console.error('Error fetching cart items:', error);
        localStorage.removeItem("access_token")
      }
    });
  }


  postCariItems(clothes_id: number, size: string): void {
    if (!this.access_token) return;
    this.service.postCariItems(clothes_id, size, this.access_token).subscribe();
  }

  putCartItem(cariItem_id: number, size: string, quantity: number = 1): void {
    if (!this.access_token) return;
    this.service.putCariItem(quantity, size, cariItem_id, this.access_token).subscribe();
  }

  deleteCariItem(cariItem_id: number): void {
    if (!this.access_token) return;
    this.service.deleteCariItem(cariItem_id, this.access_token).subscribe();
  }
}
