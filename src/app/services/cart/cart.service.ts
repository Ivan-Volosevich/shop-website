import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CatalogService } from '../catalog/catalog.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];

  @Input() id!: string;
  @Input() details!: any;

  constructor(
    private http: HttpClient,
    private catalogService: CatalogService
  ) { }

  addToCart(details: any) {
    this.items.push(this.details);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
