import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileAddressesComponent } from './profile-addresses/profile-addresses.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { UiKitModule } from '../ui-kit/ui-kit.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSettingComponent,
    TransactionsComponent,
    ProfileAddressesComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, UiKitModule],
})
export class ProfileModule {}
