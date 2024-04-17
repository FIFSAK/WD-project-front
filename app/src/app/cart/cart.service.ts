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
        console.error('Error fetching vacancies', error);
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
        console.error('Error fetching vacancies', error);
        return throwError(error);
      })
    );
  }

  getCartItems(): Observable<CartItemModel[]> {
    return this.http.get<CartItemModel[]>(this.url, {headers: {Authorization: "Bearer {Token}"}}).pipe(
      catchError(error => {
        console.error('Error fetching vacancies', error);
        return throwError(error);
      })
    );
  }

  postCariItems(data: CartItemModel, clothes_id: number, size: string): Observable<CartItemModel> {
    return this.http.post<CartItemModel>(this.url, {
      clothes_id: clothes_id,
      size: size
    }, {headers: {Authorization: "Bearer {Token}"}}).pipe(
      catchError(error => {
        console.error('Error fetching vacancies', error);
        return throwError(error);
      })
    );
  }

  putCariItems(quantity: number, size: string, clothes_id: number): Observable<CartItemModel> {
    return this.http.put<CartItemModel>(this.url + `/${clothes_id}`, {
      quantity: quantity,
      size: size
    }, {headers: {Authorization: "Bearer {Token}"}}).pipe(
      catchError(error => {
        console.error('Error fetching vacancies', error);
        return throwError(error);
      })
    );
  }
  deleteCariItems(clothes_id: number): Observable<CartItemModel> {
    return this.http.delete<CartItemModel>(this.url + `/${clothes_id}`, {headers: {Authorization: "Bearer {Token}"}}).pipe(
      catchError(error => {
        console.error('Error fetching vacancies', error);
        return throwError(error);
      })
    );
  }

}


