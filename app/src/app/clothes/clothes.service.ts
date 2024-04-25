import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
}
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from 'rxjs'
import {ClothesModel} from "./clothesModel";

@Injectable({
  providedIn: 'root'
})
export class  ClothesService {
  url = 'http://127.0.0.1:8000/api/clothes';

  constructor(private http: HttpClient) {
  }

  getClothes(filters: string): Observable<ClothesModel[]> {
    return this.http.get<ClothesModel[]>(this.url +filters).pipe(
      catchError(error => {
        console.error('Error fetching clothes', error);
        return throwError(error);
      })
    );
  }
}
