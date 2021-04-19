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
    this.items = (this.cart.getCartItems());
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
    this.cart.setItemsInCart(this.items);
  }  

  increment(id: string) {
    this.items = this.items.map((el) => {
      if (el.id === id) {
        el.amount++;
      }
      return el;
    });
    this.cart.setItemsInCart(this.items);
  }

}