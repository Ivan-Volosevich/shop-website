import { Injectable, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { CatalogService } from '../catalog/catalog.service';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Array<Product> = JSON.parse(localStorage.getItem("items") as string) || [];
  private itemsInCart: number = this.calcItemsInCart(this.items);
  private itemsInCart$ = new BehaviorSubject<number>(this.itemsInCart); // itemsInCartSubject = itemsInCart$ - наблюдение (поток, на который мы можем подписываться)

  addItemInCart(item: Product) {     // n - number

      if (this.items.length === 0) {
        item.amount = 1;
        this.items.push(item);
      } else {
        for (let i of this.items) {
          if (i.id == item.id) {
            i.amount ? i.amount++ : i.amount = 1;
          }
        } 
      }

      let idsArray = this.items.map((item) => {
        return item.id;
      });
      if (!idsArray.includes(item.id)) {
        item.amount = 1;
        this.items.push(item);
      }

      
      this.itemsInCart = this.calcItemsInCart(this.items);
      localStorage.setItem("items", JSON.stringify(this.items));
      this.itemsInCart$.next(this.itemsInCart);
  }

  setItemsInCart(items: Array<Product>) {
    this.items = [...items];
    this.itemsInCart = this.items.length;
    localStorage.setItem('items', JSON.stringify(this.items));
    this.itemsInCart$.next(this.itemsInCart);
  }

  getSubscription() {
    return this.itemsInCart$;
  }

  getCartItems() {
    return this.items;
  }

  private calcItemsInCart(items: any[]): number {
    let result = items.reduce((t, v) => {
      return v.amount ? t + v.amount : t + 1;
    }, 0);

    return result;
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
