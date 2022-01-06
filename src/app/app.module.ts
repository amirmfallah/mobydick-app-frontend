import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './../core/interceptors/token.interceptor';
import { CategorypageModule } from './categorypage/categorypage.module';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { ProductComponent } from './product/product.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { YourOrderComponent } from './your-order/your-order.component';
import { BottomTabDiscountComponent } from './ui-kit/bottom-tab-discount/bottom-tab-discount.component';
import { ChooseAddressComponent } from './choose-address/choose-address.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProfileAddressesComponent } from './profile-addresses/profile-addresses.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    OrderpageComponent,
    ProductComponent,
    HistoryComponent,
    ProfileComponent,
    YourOrderComponent,
    BottomTabDiscountComponent,
    SearchpageComponent,
    ChooseAddressComponent,
    ProfileSettingComponent,
    TransactionsComponent,
    ProfileAddressesComponent
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiKitModule,
    NgbModule,
    HttpClientModule,
    CategorypageModule,
    ReactiveFormsModule,
    MatInputModule,
    IvyCarouselModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
