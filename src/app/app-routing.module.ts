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

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: OrderpageComponent,
  },
  {
    path: 'search',
    component: SearchpageComponent,
  },
  {
    path: 'category',
    component: CategorypageComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
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
