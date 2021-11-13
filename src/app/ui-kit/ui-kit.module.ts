import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { CarouselComponent } from './carousel/carousel.component';
import { MatDividerModule } from '@angular/material/divider';
import { PriceComponent } from './price/price.component';
import { MatSelectModule } from '@angular/material/select';
import { TopNavSpacingComponent } from './top-nav-spacing/top-nav-spacing.component';
import { BranchesListComponent } from './branches-list/branches-list.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HandlenumberComponent } from './handlenumber/handlenumber.component';
@NgModule({
  declarations: [
    TopNavBarComponent,
    CodeSentComponent,
    EnterPhoneNumberComponent,
    SeeMoreComponent,
    BottomTabComponent,
    BottomNavSpacingComponent,
    CarouselComponent,
    PriceComponent,
    TopNavSpacingComponent,
    BranchesListComponent,
    HandlenumberComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatRippleModule,
    NgbModule,
    MatSelectModule,
    MatListModule,
    RouterModule,
  ],
  exports: [
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    TopNavBarComponent,
    CodeSentComponent,
    EnterPhoneNumberComponent,
    SeeMoreComponent,
    BottomTabComponent,
    BottomNavSpacingComponent,
    CarouselComponent,
    PriceComponent,
    TopNavSpacingComponent,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    HandlenumberComponent,
  ],
})
export class UiKitModule {}
