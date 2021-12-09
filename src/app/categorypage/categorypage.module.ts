import { HttpClientModule } from '@angular/common/http';
import { UiKitModule } from './../ui-kit/ui-kit.module';
import { CategorypageComponent } from './categorypage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorypageService } from './services/categorypage.service';

@NgModule({
  declarations: [CategorypageComponent],
  imports: [CommonModule, UiKitModule, HttpClientModule],
  providers: [CategorypageService],
})
export class CategorypageModule {}
