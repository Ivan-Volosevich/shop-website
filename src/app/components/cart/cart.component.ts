import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { CatalogService } from '../../services/catalog/catalog.service';
import { CartService } from '../../services/cart/cart.service';
import { addToCart, removeFromCart } from '../../actions/actions.cart';
import { State } from '../../reducers';
import { Observable } from 'rxjs';
import { state } from '@angular/animations';
import { cartState } from 'src/app/reducers/reducers.cart';

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
    

  items: any[] = [];
  counter: number = 0;

  cartAmount$!: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private cart: CartService,
    private store: Store<{ cart: { amount:number } }>,
  ) {
    // this.cartAmount$ = store.select(cart.amount);
    // console.log('cartAmount$', this.cartAmount$);
  }

  ngOnInit(): void {
    this.items = this.cart.getCartItems();

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
    this.items = this.items.map((el) => {
      if (el.id === id) {
        el.amount--;
      }
      return el;
    });
    this.cart.setItemsInCart(this.items);
  }  

  increment(id: string) {
    this.store.dispatch(addToCart());

    this.items = this.items.map((el) => {
      if (el.id === id) {
        el.amount++;
      }
      return el;
    });
    this.cart.setItemsInCart(this.items);
  }

}
