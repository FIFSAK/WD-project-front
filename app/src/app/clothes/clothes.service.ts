import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Clothes } from "../start-page/models";
import { StartPageService } from "../start-page/start-page.service";

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  clothes: Clothes[] = [];

  constructor(
    private clothesService: StartPageService,
    private router: Router // добавьте Router
  ) {
    this.getClothes();
  }

  getClothes() {
    console.log("Clothes");
    this.clothesService.getClothes().subscribe((data) => {
      this.clothes = data;
    });
  }

  redirectToClothes() {
    this.router.navigate(['/clothes']); // перенаправление на ClothesComponent
  }
}
