import { TokenInterceptor } from './../../core/interceptors/token.interceptor';
import { RouterModule } from '@angular/router';
import { SignedOutGuard } from './guards/signed-out.guard';
import { SignedInGuard } from './guards/signed-in.guard';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthComponent } from './auth/auth.component';
import { UiKitModule } from '../ui-kit/ui-kit.module';
import { AuthService } from 'src/core/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    UiKitModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [SignedInGuard, SignedOutGuard, AuthService],
})
export class AuthenticationModule {}
