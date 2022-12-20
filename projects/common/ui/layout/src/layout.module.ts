import { HeaderDirective } from './header/header.directive';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderDirective
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    HeaderComponent,
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    HeaderDirective
  ],
})
export class LayoutModule { }