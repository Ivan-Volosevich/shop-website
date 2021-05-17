import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCart from '../reducers/reducers.cart';

export interface State {
  // cart: fromCart.cartState;
}

export const reducers: ActionReducerMap<State> = {
  cart: fromCart.cartReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
