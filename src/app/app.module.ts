import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragScrollModule  } from 'ngx-drag-scroll';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { RedDirective } from './derectives/red.directive';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    ItemDetailComponent,
    CartComponent,
    RedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragScrollModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
