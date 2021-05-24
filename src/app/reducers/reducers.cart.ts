import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { incrementItemInCart, decrementItemInCart, addItemToCart } from '../actions/actions.cart';
import { Product } from '../interfaces/product';

export interface State {
    amount: number,
    items: { [key: string]: Product },
}

export const cartState: State = {
    amount: 0,
    items: {},
}

const _cartReducer = createReducer(
    cartState,
    on(incrementItemInCart, (state: State) => ({...state, amount: state.amount + 1})),
    on(decrementItemInCart, (state: State) => ({...state, amount: state.amount - 1})),
    on(addItemToCart, (state: State, product) => {
        if (product.id in state.items) {
            return {
                ...state,
                items: {
                    ...state.items,
                    [product.id]: {
                        ...product,
                        amount: state.items[product.id].amount + 1
                    }
                }
            }
        } else {
            return {
                ...state,
                items: {
                    ...state.items,
                    [product.id]: {
                        ...product,
                        amount: 1,
                    }
                }
            }
        }
    ({...state, amount: state.amount + 1})
    }),
);

export function cartReducer(state: State = cartState, action: Action) {
    return _cartReducer(state, action);
}

const calcItemsInCart = (items: any[]): number => {
    let result = items.reduce((t, v) => {
      return v.amount ? t + v.amount : t + 1;
    }, 0);
    return result;
  }