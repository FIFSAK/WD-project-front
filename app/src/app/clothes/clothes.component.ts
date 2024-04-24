import {Component} from '@angular/core';
import {ClothesModel} from "./clothesModel";
import {ClothesService} from "./clothes.service";
import {Service} from "../cart/cart.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent {
  clothes: ClothesModel[] = [];
  filter: string = '/?';
  category: string = '';

  constructor(private clothesService: ClothesService, private cartService: Service, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category') || '';
    if (this.category !== '') {
      this.filter += 'category=' + this.category;
    }
    console.log('Category:', this.category);
    this.clothesService.getClothes(this.filter).subscribe({
      next: (data: any) => {
        this.clothes = data.results.map((cloth: any) => ({
          ...cloth,
          image_index: 0,
          chosenSize: cloth.sizes[0].size
        }));
        console.log('Clothes:', this.clothes);
      },
      error: (error) => {
        console.error('Error fetching clothes:', error);
      }
    });
  }

  changeImage(cloth: ClothesModel, direction: number): void {
    const count = cloth.images.length;
    const nextIndex = cloth.image_index + direction;
    if (nextIndex >= 0 && nextIndex < count) {
      cloth.image_index = nextIndex;
    }
  }

  changeSize(cloth: ClothesModel, size: string): void {
    cloth.chosenSize = size;
  }

  addToCart(id: number, size: string): void {
    if (localStorage.getItem('accessToken')) {
      // @ts-ignore
      this.cartService.postCariItems(id, size, localStorage.getItem('accessToken')).subscribe({
        next: (data: any) => {
          console.log('Successfully added to cart:', data);
        },
        error: (error: any) => {
          console.error('Error adding to cart:', error);
        }
      })
    }
  }


  protected readonly ClothesService = ClothesService;
}
