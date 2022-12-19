import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APDeviceComponent } from './pages/device/device.component';
import { HomeComponent } from './pages/home/home.component';
import { APTenantComponent } from './pages/tenant/tenant.component';
import { APUserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'tenant', component: APTenantComponent
  },
  {
    path: 'user', component: APUserComponent
  },
  {
    path: 'device', component: APDeviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
