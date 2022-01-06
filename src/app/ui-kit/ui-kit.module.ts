import { SliderSkeletonComponent } from './categories/slider/slider-skeleton/slider-skeleton.component';
import { FavSkeletonComponent } from './../ui-kit/favourites/fav-skeleton/fav-skeleton.component';
import { MatChipsModule } from '@angular/material/chips';
import { SearchItemComponent } from './search-item/search-item.component';
import { FavouriteItemComponent } from './favourites/favourite-item/favourite-item.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SearchComponent } from './search/search.component';
import { SliderItemComponent } from './categories/slider/slider-item/slider-item.component';
import { SliderComponent } from './categories/slider/slider.component';
import { ReactiveFormsModule } from '@angular/forms';
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
import { MatTabsModule } from '@angular/material/tabs';
import { BottomTabInprogressComponent } from './bottom-tab-inprogress/bottom-tab-inprogress.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { NewAddressComponent } from './new-address/new-address.component';
import { HistoryItemComponent } from './history-item/history-item.component';
import { MatBadgeModule } from '@angular/material/badge';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartItemSkeletonComponent } from './cart-item/cart-item-skeleton/cart-item-skeleton.component';

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
    BottomTabInprogressComponent,
    SliderComponent,
    SliderItemComponent,
    SearchComponent,
    FavouritesComponent,
    FavouriteItemComponent,
    SearchItemComponent,
    FavSkeletonComponent,
    SliderSkeletonComponent,
    EmptyPageComponent,
    NewAddressComponent,
    HistoryItemComponent,
    CartItemComponent,
    CartItemSkeletonComponent,
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
    MatChipsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatSlideToggleModule
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
    MatTabsModule,
    BottomTabInprogressComponent,
    SliderComponent,
    SliderItemComponent,
    SearchComponent,
    FavouritesComponent,
    FavouriteItemComponent,
    SearchItemComponent,
    MatButtonToggleModule,
    FavSkeletonComponent,
    EmptyPageComponent,
    HistoryItemComponent,
    MatSlideToggleModule
    CartItemComponent,
    CartItemSkeletonComponent,
  ],
})
export class UiKitModule {}
