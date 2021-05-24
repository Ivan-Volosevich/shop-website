import { createAction, props } from '@ngrx/store';
import { Product } from '../interfaces/product';

export const incrementItemInCart = createAction('incrementItemInCart');
export const decrementItemInCart = createAction('decrementItemInCart');
export const addItemToCart = createAction('addItemToCart', props<Product>());