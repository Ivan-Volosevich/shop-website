import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatalogService } from '../../services/catalog/catalog.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any;

  id!: string;
  details!: any;
  

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private cartService: CartService
  ) {
    this.items = this.cartService.getItems();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.catalogService.searchById(this.id).subscribe((data) => {
      this.details = data;
    });
  }

}
