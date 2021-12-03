import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiKitModule } from './ui-kit/ui-kit.module';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './ui-kit/categories/categories.component';
import { SliderComponent } from './ui-kit/categories/slider/slider.component';
import { SliderItemComponent } from './ui-kit/categories/slider/slider-item/slider-item.component';
import { SearchComponent } from './ui-kit/search/search.component';
import { FavouritesComponent } from './ui-kit/favourites/favourites.component';
import { FavouriteItemComponent } from './ui-kit/favourites/favourite-item/favourite-item.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SearchItemComponent } from './ui-kit/search-item/search-item.component';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { ProductComponent } from './product/product.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { BottomTabDiscountComponent } from './ui-kit/bottom-tab-discount/bottom-tab-discount.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    SliderComponent,
    SliderItemComponent,
    SearchComponent,
    FavouritesComponent,
    FavouriteItemComponent,
    SearchpageComponent,
    SearchItemComponent,
    CategorypageComponent,
    OrderpageComponent,
    ProductComponent,
    HistoryComponent,
    ProfileComponent,
    BottomTabDiscountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiKitModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
