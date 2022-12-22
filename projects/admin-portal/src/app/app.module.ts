import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APTenantComponent } from './pages/tenant/tenant.component';
import { APUserComponent } from './pages/user/user.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent, HeaderDirective } from '@common/ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APDeviceComponent } from './pages/device/device.component';
import { HomeComponent } from './pages/home/home.component';
import { APLayoutComponent } from './components/layout/layout.component';
import { ActiveRouteDirective } from '@common/directives';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    APDeviceComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    HeaderDirective,
    ActiveRouteDirective,
    APLayoutComponent,
    APUserComponent,
    APTenantComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
