import { Routes, RouterModule } from '@angular/router';
import { ProfileAddressesComponent } from './profile-addresses/profile-addresses.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { SignedInGuard } from './../authentication/guards/signed-in.guard';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [SignedInGuard],
  },
  {
    path: 'profile',
    component: ProfileSettingComponent,
    canActivate: [SignedInGuard],
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
    canActivate: [SignedInGuard],
  },
  {
    path: 'addresses',
    component: ProfileAddressesComponent,
    canActivate: [SignedInGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
