import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from '../actions/actions.cart';

export interface cartState {
    amount: number,
    items: any[],
}

export const cartState: cartState = {
    amount: 0,
    items: [],
};

const _cartReducer = createReducer(
    cartState,
    on(addToCart, (state: cartState) => ({...state, amount: state.amount + 1})),
    on(removeFromCart, (state: cartState) => ({...state, amount: state.amount + 1})),
  );

export function cartReducer(state: cartState, action: Action) {
    return _cartReducer(state, action);
}