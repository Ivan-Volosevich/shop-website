import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menSlides = [];
  womenSlides = [];
  childrenSlides = [];

  isMenVisible = true;
  isWomenVisible = true;
  isChildrenVisible = true;

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.catalogService.getMenSlides().subscribe((data) => {
      this.menSlides = data;
    });

    this.catalogService.getWomenSlides().subscribe((data) => {
      this.womenSlides = data;
    });

    this.catalogService.getChildrenSlides().subscribe((data) => {
      this.childrenSlides = data;
    });
  }

  seeAllProducts() {
    this.isMenVisible = true;
    this.isWomenVisible = true;
    this.isChildrenVisible = true;
  }

}
