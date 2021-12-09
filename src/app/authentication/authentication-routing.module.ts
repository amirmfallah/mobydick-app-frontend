import { SignedOutGuard } from './guards/signed-out.guard';
import { SignedInGuard } from './guards/signed-in.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    component: AuthComponent,
    canActivate: [SignedOutGuard],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
