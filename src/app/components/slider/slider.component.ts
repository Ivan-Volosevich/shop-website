import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() slides: any[] = [];
  @Input() header: string = '';

  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  ngOnInit() {}

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  // public sliderItemsMen: Array<{size: string, color: string, name: string, price: number, image: string}> = []
  // public sliderItemsWomen: Array<{size: string, color: string, name: string, price: number, image: string}> = []
}
