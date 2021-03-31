import { Component } from '@angular/core';
//добавить CatalogService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop-website';

  menSlides = [];
  womenSlides = [];
  childrenSlides = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.catalogService.getMenSlides().subscribe((data) => {
      this.menSlides = data;
    });

    this.catalogService.getWomenSlides().subscribe((data) => {
      this.menSlides = data;
    });

    this.catalogService.getChildrenSlides().subscribe((data) => {
      this.menSlides = data;
    });
  }
}
