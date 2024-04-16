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

// TODO add body and finish the method
  getCartItems(): Observable<CartItemModel[]> {
    return this.http.get<CartItemModel[]>(this.url);
  }

// TODO add body and finish the method
  postCariItems(data: CartItemModel): Observable<CartItemModel> {
    return this.http.post<CartItemModel>(this.url, data).pipe(
      catchError(error => {
        console.error('Error fetching vacancies', error);
        return throwError(error);
      })
    );
  }

  putCariItems(clothes_id: number, size: string): Observable<CartItemModel> {
    return this.http.put<CartItemModel>(this.url, {
      clothes_id: clothes_id,
      size: size
    }, {headers: {Authorization: "Bearer {Token}"}}).pipe(
      catchError(error => {
        console.error('Error fetching vacancies', error);
        return throwError(error);
      })
    );
  }

  // TODO add body and finish the method
  deleteCariItems(id: number): Observable<CartItemModel> {
    return this.http.delete<CartItemModel>(this.url + `/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching vacancies', error);
        return throwError(error);
      })
    );
  }

}


