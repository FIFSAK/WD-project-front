import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Clothes} from "../clothes/models";

@Injectable({
  providedIn: 'root'
})
export class StartPageService {
}
