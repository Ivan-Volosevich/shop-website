import { Component, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop-website';

  public sliderItems: Array<{name: string, price: number}> = [
    {
      name: 't-shirt',
      price: 5,
    },
    {
      name: 'Pants FORCLAZ',
      price: 30,
    },
    {
      name: 'backpack',
      price: 60,
    },
    {
      name: 'hat',
      price: 15,
    },
    {
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
