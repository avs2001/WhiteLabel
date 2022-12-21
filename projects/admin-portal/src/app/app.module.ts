import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APTenantComponent } from './pages/tenant/tenant.component';
import { APUserComponent } from './pages/user/user.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent, HeaderDirective } from '@common/ui/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APDeviceComponent } from './pages/device/device.component';
import { HomeComponent } from './pages/home/home.component';
import { APLayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    APDeviceComponent,
    APTenantComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    HeaderDirective,
    APLayoutComponent,
    APUserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
