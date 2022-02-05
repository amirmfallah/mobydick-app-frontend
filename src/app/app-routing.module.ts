import { CartComponent } from './cart/cart.component';
import { SignedInGuard } from './authentication/guards/signed-in.guard';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { HomeComponent } from './home/home.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { CategoriesComponent } from './ui-kit/categories/categories.component';
import { ProductComponent } from './product/product.component';
import { HistoryComponent } from './history/history.component';
import { YourOrderComponent } from './your-order/your-order.component';
import { ProfileSettingComponent } from './profile/profile-setting/profile-setting.component';
import { TransactionsComponent } from './profile/transactions/transactions.component';
import { ProfileAddressesComponent } from './profile/profile-addresses/profile-addresses.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignedInGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [SignedInGuard],
  },
  {
    path: 'checkout/:id',
    component: OrderpageComponent,
    canActivate: [SignedInGuard],
  },
  {
    path: 'search',
    component: SearchpageComponent,
    canActivate: [SignedInGuard],
  },
  {
    path: 'categories/:id',
    component: CategorypageComponent,
    canActivate: [SignedInGuard],
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    canActivate: [SignedInGuard],
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [SignedInGuard],
  },
  {
    path: 'your-order',
    component: YourOrderComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
