import { Component } from '@angular/core';
import {Clothes} from "./models";
import {StartPageService} from "./start-page.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent {

  constructor(private router: Router) {}

  redirectToClothes() {
    this.router.navigate(['/clothes']); // перенаправление на ClothesComponent
  }
}
