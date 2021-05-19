import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createSelector, select, Store } from '@ngrx/store';

import { CatalogService } from '../../services/catalog/catalog.service';
import { CartService } from '../../services/cart/cart.service';
import { addToCart, removeFromCart } from '../../actions/actions.cart';
import { AppState } from '../../reducers';
import { from, Observable } from 'rxjs';
import { state } from '@angular/animations';
import { cartState } from 'src/app/reducers/reducers.cart';
import { selectCartCount, selectCartItems } from '../../selectors/selectors.cart';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl(''),
    paymentType: new FormControl(''),
  });
    

  items$ = this.store.select(selectCartItems);
  counter: number = 0;

  cartAmount$: Observable<number> = this.store.select(selectCartCount);

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private cart: CartService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    // this.items = this.cart.getCartItems();
    this.store.subscribe((v) => console.log('from store ', v));
  }

  onSubmit() {
    let result = Object.assign(
      this.orderForm.value,
      { items: this.cart.getCartItems() }
      );
    console.log(result);
  }

  sumOfItem() {}
  
  decrement(id: string) {
    this.store.dispatch(removeFromCart());

    // this.items = this.items.map((el) => {
    //   if (el.id === id) {
    //     el.amount--;
    //   }
    //   return el;
    // });
    // this.cart.setItemsInCart(this.items);
  }  

  increment(id: string) {
    this.store.dispatch(addToCart());

  //   this.items = this.items.map((el) => {
  //     if (el.id === id) {
  //       el.amount++;
  //     }
  //     return el;
  //   });
  //   this.cart.setItemsInCart(this.items);
  }
}
