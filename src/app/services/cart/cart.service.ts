import { Injectable, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { CatalogService } from '../catalog/catalog.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: any[] = [];
  itemsInCart: number = 0;
  itemsInCart$ = new BehaviorSubject<number>(0); // itemsInCartSubject = itemsInCart$ - наблюдение (поток, на который мы можем подписываться)

  setItemsInCart(item: Object) {     // n - number
      this.itemsInCart++;
      this.items.push(item);
      this.itemsInCart$.next(this.itemsInCart);
  }

  getSubscription() {
    return this.itemsInCart$;
  }

  getCartItems() {
    return this.items;
  }


  constructor(
    private http: HttpClient,
    private catalogService: CatalogService
  ) { }

  // clearCart() {
  //   this.items = [];
  //   console.log('cart items clear', this.items);
  //   return this.items;
  // }
}
