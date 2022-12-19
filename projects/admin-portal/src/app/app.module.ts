import { APTenantComponent } from './pages/tenant/tenant.component';
import { APUserComponent } from './pages/user/user.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule, HeaderDirective } from '@common/ui/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APDeviceComponent } from './pages/device/device.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    APDeviceComponent,
    APUserComponent,
    APTenantComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
