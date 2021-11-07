import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { HomeComponent } from './home/home.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { CategoriesComponent } from './ui-kit/categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
