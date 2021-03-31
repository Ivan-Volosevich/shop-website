import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() header: string = '';

  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  public sliderItemsMen: Array<{size: string, color: string, name: string, price: number, image: string}> = [
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
      image: '../assets/scarf.png',
    },
  ]

  itemsAmount: number = 0;  
  currentNumber: number = 0;


  ngOnInit() {
    this.itemsAmount = this.sliderItemsMen.length;
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }


  public sliderItemsWomen: Array<{size: string, color: string, name: string, price: number, image: string}> = [
    {
      size: 'size',
      color: '',
      name: 'giacket',
      price: 5,
      image: '../assets/w-giacket.png',
    },
    {
      size: 'size',
      color: '',
      name: 'trekking shoes',
      price: 30,
      image: '../assets/w-track-shoes.png',
    },
    {
      size: 'size',
      color: 'color',
      name: 't-shirt',
      price: 60,
      image: '../assets/w-t-shirt.png',
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

}
