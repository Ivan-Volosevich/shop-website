import { Component, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop-website';

  public sliderItems: Array<{size: string, color: string, name: string, price: number}> = [
    {
      size: 'size',
      color: 'color',
      name: 't-shirt',
      price: 5,
    },
    {
      size: 'size',
      color: '',
      name: 'Pants FORCLAZ',
      price: 30,
    },
    {
      size: '10litri',
      color: '',
      name: 'backpack',
      price: 60,
    },
    {
      size: 'size',
      color: '',
      name: 'hat',
      price: 15,
    },
    {
      size: 'size',
      color: 'color',
      name: 'scarf',
      price: 12,
    },
  ];

  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
}
