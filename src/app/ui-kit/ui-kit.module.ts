import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { CodeSentComponent } from './code-sent/code-sent.component';
import { EnterPhoneNumberComponent } from './enter-phone-number/enter-phone-number.component';
import { SeeMoreComponent } from './see-more/see-more.component';
import { BottomTabComponent } from './bottom-tab/bottom-tab.component'; 
@NgModule({
  declarations: [TopNavBarComponent, CodeSentComponent, EnterPhoneNumberComponent, SeeMoreComponent, BottomTabComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    TopNavBarComponent,
    CodeSentComponent,
    EnterPhoneNumberComponent,
    SeeMoreComponent,
    BottomTabComponent
  ]
})
export class UiKitModule { }
