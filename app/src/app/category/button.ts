import { Component } from '@angular/core';

@Component({
  selector: 'app-button-grid',
  templateUrl: './button-grid.component.html',
  standalone: true,
  styleUrls: ['./button-grid.component.css']
})
export class Button {
  buttons = [
    'Button 1', 'Button 2', 'Button 3', 'Button 4',
    'Button 5', 'Button 6', 'Button 7', 'Button 8',
    'Button 9', 'Button 10', 'Button 11', 'Button 12'
  ];
}
