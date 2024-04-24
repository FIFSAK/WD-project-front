import { Component, OnInit } from '@angular/core';
import { Type } from './type';
import { Size } from './size';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  types: Type[] = [];
  sizes: Size[] = [];
  selectedType: Type | null = null;
  clothingRows: Type[][] = [];
  buttonBottomPosition: number = 0;

  ngOnInit(): void {
    this.loadTypes();
    this.loadSizes();
  }

  loadTypes(): void {
    import('./type').then(module => {
      this.types = module.type.map((type: Type) => ({ ...type, open: false }));
      this.clothingRows = this.chunkArray(this.types, 4);
    });
  }

  loadSizes(): void {
    import('./size').then(module => {
      this.sizes = module.size;
    });
  }

  toggleSizes(type: Type): void {
    this.selectedType = this.selectedType === type ? null : type;
    this.calculateButtonPosition();
  }

  calculateButtonPosition(): void {
    setTimeout(() => {
      const selectedButton = document.querySelector('.button-container .active');
      if (selectedButton) {
        const buttonRect = selectedButton.getBoundingClientRect();
        const sizesContainer = document.querySelector('.sizes');
        const sizesHeight = sizesContainer ? sizesContainer.clientHeight : 0;
        this.buttonBottomPosition = buttonRect.height + sizesHeight;
      }
    });
  }

  chunkArray(array: any[], size: number): any[] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
}
