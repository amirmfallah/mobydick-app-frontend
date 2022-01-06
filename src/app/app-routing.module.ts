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

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignedInGuard],
  },
  {
    path: 'cart',
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
    path: 'profile',
    component: ProfileComponent,
    //canActivate: [SignedInGuard],
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
