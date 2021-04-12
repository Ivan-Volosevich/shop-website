import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatalogService } from '../../services/catalog/catalog.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any[] = [];
  counter: number = 0;
  

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private cart: CartService
  ) {  }

  ngOnInit(): void {
    this.items = this.groupItems(this.cart.getCartItems());

    
    this.counter = this.cart.itemsInCart;
  }

  groupItems(arr: any[]): any[] {
    const result: any[] = [];
    const ids: any[] = [];
    for (let item of arr) {
      if (ids.includes(item.id)) {
        result.forEach((el, i) => {
          if (el.id === item.id) {
            result[i].amount++
          }
        })
      } else {
        result.push({...item, amount: 1});
        ids.push(item.id);
      }
    }
    return result;
  }

  sumOfItem() {

  }
  
  decrement(id: string) {
    this.items = this.items.map((el) => {
      if (el.id === id) {
        el.amount--;
      }
      return el;
    });
  }  

  increment(id: string) {
    this.items = this.items.map((el) => {
      if (el.id === id) {
        el.amount++;
      }
      return el;
    });
  }

}
