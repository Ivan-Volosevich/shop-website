import { Component, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop-website';

  public sliderItems: Array<{size: string, color: string, name: string, price: number, image: string}> = [
    {
      size: 'size',
      color: 'color',
      name: 't-shirt',
      price: 5,
      image: '../assets/t-shirt.png',
    },
    {
      size: 'size',
      color: '',
      name: 'Pants FORCLAZ',
      price: 30,
      image: '../assets/pants.png',
    },
    {
      size: '10litri',
      color: '',
      name: 'backpack',
      price: 60,
      image: '../assets/backpack.png',
    },
    {
      size: 'size',
      color: '',
      name: 'hat',
      price: 15,
      image: '../assets/pants.png',
    },
    {
      size: 'size',
      color: 'color',
      name: 'scarf',
      price: 12,
      image: '../assets/t-shirt.png',
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
