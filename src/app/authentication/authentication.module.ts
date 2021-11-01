import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthComponent } from './auth/auth.component';
import { UiKitModule } from '../ui-kit/ui-kit.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthenticationRoutingModule, UiKitModule],
})
export class AuthenticationModule {}
