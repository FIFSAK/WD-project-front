import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from 'rxjs'
import {CartItemModel} from "./cartItemModel";


@Injectable({
  providedIn: 'root'
})
export class Service {
  url = 'http://127.0.0.1:8000/api/cartItem';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/token/', {
      username: username,
      password: password
    }).pipe(
      catchError(error => {
        console.error('login error', error);
        return throwError(error);
      })
    );
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register/', {
      username: username,
      password: password
    }).pipe(
      catchError(error => {
        console.error('Error register', error);
        return throwError(error);
      })
    );
  }

  getCartItems(token: string): Observable<CartItemModel[]> {
    return this.http.get<CartItemModel[]>(this.url, {headers: {Authorization: `Bearer ${token}`}}).pipe(
      catchError(error => {
        console.error('Error fetching cartitems', error);
        return throwError(error);
      })
    );
  }

  postCariItems(clothes_id: number, size: string, token: string): Observable<CartItemModel> {
    return this.http.post<CartItemModel>(this.url + "/", {
      clothes_id: clothes_id,
      size: size
    }, {headers: {Authorization: `Bearer ${token}`}}).pipe(
      catchError(error => {
        console.error('Error post cartitems', error);
        return throwError(error);
      })
    );
  }

  putCariItem(quantity: number, size: string, cartItem_id: number, token: string): Observable<CartItemModel> {
    return this.http.put<CartItemModel>(this.url + `/${cartItem_id}/`, {
      quantity: quantity,
      size: size
    }, {headers: {Authorization: `Bearer ${token}`}}).pipe(
      catchError(error => {
        console.error('Error update cartitems', error);
        return throwError(error);
      })
    );
  }
  deleteCariItem(cartItem_id: number, token: string): Observable<CartItemModel> {
    return this.http.delete<CartItemModel>(this.url + `/${cartItem_id}`, {headers: {Authorization: `Bearer ${token}`}}).pipe(
      catchError(error => {
        console.error('Error deleting cartitems', error);
        return throwError(error);
      })
    );
  }

}


