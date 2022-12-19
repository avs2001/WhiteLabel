import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatSidenavModule
  ],
  exports: [LayoutComponent],
})
export class LayoutModule { }