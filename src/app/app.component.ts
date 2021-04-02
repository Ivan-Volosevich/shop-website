import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'shop-website';

  clicks: number = 0;
  // ClickCounter = 0;

  // addToCartItem() {
  //   this.ClickCounter = clicks;
  //   console.log(clicks);
  // }

}
