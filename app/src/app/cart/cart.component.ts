import {Component, OnInit} from '@angular/core';
import {CartItemModel} from './cartItemModel';
import {Service} from './cart.service';
import {error} from "@angular/compiler-cli/src/transformers/util";

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

  putCartItem(cartItem_id: number, size: string, quantity: number = 1): void {
    if (!this.access_token) {
      console.error('No access token available.');
      return;
    }

    this.service.putCariItem(quantity, size, cartItem_id, this.access_token).subscribe({
      next: (data) => {
        console.log('Update successful:', data);
      },
      error: (error) => {
        // Check if the error object has an error field and it contains an array
        if (error.error instanceof Array) {
          console.error('Error updating cart item:', error.error.join(', '));
          alert(error.error.join(', '))
        } else if (typeof error.error === 'string') {
          console.error('Error updating cart item:', error.error);
        } else {
          console.error('Error updating cart item:', error.message);
        }
        document.location.reload();
      }
    });
  }


  deleteCariItem(cariItem_id: number): void {
    if (!this.access_token) return;
    this.service.deleteCariItem(cariItem_id, this.access_token).subscribe();
    document.location.reload();
  }

  updateCartItemSize(item: CartItemModel, newSize: string): void {
    // Logic to handle updating the size
    console.log(`Updated size to ${newSize}`);
    this.putCartItem(item.id, newSize, item.quantity);

  }

  updateCartItemQuantity(item: CartItemModel, newQuantity: number): void {
    // Logic to handle updating the quantity
    console.log(`Updated quantity to ${newQuantity}`);
    this.putCartItem(item.id, item.size, newQuantity);
  }

  getAvailableQuantities(selectedSize: string, sizes: any[]): number[] {
    const sizeOption = sizes.find(size => size.size === selectedSize);
    return [...Array(sizeOption.quantity + 1).keys()].slice(1); // Create an array from 1 to quantity
  }
}
