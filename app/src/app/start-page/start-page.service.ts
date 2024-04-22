import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Clothes} from "./models";

@Injectable({
  providedIn: 'root'
})
export class StartPageService {

  url = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) {
  }

  getClothes():Observable<Clothes[]>{
    return this.http.get<Clothes[]>(
      `${this.url}/api/`,
    );
  }

}
