import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { CodeSentComponent } from './code-sent/code-sent.component'; 
@NgModule({
  declarations: [TopNavBarComponent, CodeSentComponent],
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
    CodeSentComponent
  ]
})
export class UiKitModule { }
