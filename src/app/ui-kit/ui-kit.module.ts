import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { CodeSentComponent } from './code-sent/code-sent.component';
import { EnterPhoneNumberComponent } from './enter-phone-number/enter-phone-number.component';
import { SeeMoreComponent } from './see-more/see-more.component';
import { BottomTabComponent } from './bottom-tab/bottom-tab.component';
import { BottomNavSpacingComponent } from './bottom-nav-spacing/bottom-nav-spacing.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    TopNavBarComponent,
    CodeSentComponent,
    EnterPhoneNumberComponent,
    SeeMoreComponent,
    BottomTabComponent,
    BottomNavSpacingComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatRippleModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    TopNavBarComponent,
    CodeSentComponent,
    EnterPhoneNumberComponent,
    SeeMoreComponent,
    BottomTabComponent,
    BottomNavSpacingComponent,
  ],
})
export class UiKitModule {}
