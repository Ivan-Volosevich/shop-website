import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatalogService } from '../../services/catalog/catalog.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  id!: string;
  details!: any;


  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private cart: CartService)
    { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.catalogService.searchById(this.id).subscribe((data) => {
      this.details = data;
    });
  }

  addToCart(details: any) {
    this.cart.addItemInCart(details);
  }
}
