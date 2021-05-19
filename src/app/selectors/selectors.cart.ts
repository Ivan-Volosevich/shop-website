import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/index';
import { State } from '../reducers/reducers.cart';

export const selectCartFeature = (state: AppState) => state.cart;

export const selectCartCount = createSelector(
    selectCartFeature,
    (state: State) => state.amount
)

export const selectCartItems = createSelector(
    selectCartFeature,
    (state: State) => state.items
)