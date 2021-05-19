import { state } from '@angular/animations';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCart from '../reducers/reducers.cart';

export interface AppState {
  cart: fromCart.State
}

export const reducers: ActionReducerMap<AppState> = {
  cart: fromCart.cartReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
