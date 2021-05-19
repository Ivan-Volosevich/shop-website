import { createAction, props } from '@ngrx/store';
import { Product } from '../interfaces/product';

export const addToCart = createAction('addToCart');
export const removeFromCart = createAction('removeFromCart');
export const addItemToCart = createAction('addItemToCart', props<Product>());