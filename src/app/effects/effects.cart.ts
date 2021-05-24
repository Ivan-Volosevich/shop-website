import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/index';
import { addItemToCart } from '../actions/actions.cart';
import { map, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class CartEffects {
    saveToLocalStorage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addItemToCart),
            withLatestFrom(this.store),
            map(([action, store]) => {
                localStorage.setItem('store', JSON.stringify(store.cart))
            })
        ), { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private store: Store<AppState>
      ) {}
}