import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiKitModule } from './ui-kit/ui-kit.module';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { SliderComponent } from './categories/slider/slider.component';
import { SliderItemComponent } from './categories/slider/slider-item/slider-item.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FavouriteItemComponent } from './favourites/favourite-item/favourite-item.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, CategoriesComponent, SliderComponent, SliderItemComponent, FavouritesComponent, FavouriteItemComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, UiKitModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
