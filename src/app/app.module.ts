import { ChooseAddressComponent } from './choose-address/choose-address.component';
import { ProfileModule } from './profile/profile.module';
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
import { SearchpageComponent } from './searchpage/searchpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { ProductComponent } from './product/product.component';
import { HistoryComponent } from './history/history.component';
import { YourOrderComponent } from './your-order/your-order.component';
import { BottomTabDiscountComponent } from './ui-kit/bottom-tab-discount/bottom-tab-discount.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    OrderpageComponent,
    ProductComponent,
    HistoryComponent,
    YourOrderComponent,
    BottomTabDiscountComponent,
    SearchpageComponent,
    CartComponent,
    ChooseAddressComponent,
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
    ProfileModule,
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
