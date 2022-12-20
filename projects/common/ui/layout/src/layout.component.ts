import { clientLogoIcon, NavAction, NavigationItem, navigationItems } from './layout.conf';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kbm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  opened: boolean = true;
  NavAction = NavAction;
  navigationItems!: NavigationItem[];
  clientLogoItem!: string

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.navigationItems = navigationItems;
    this.clientLogoItem = clientLogoIcon
  }

  clickAction(navigationItem: NavigationItem) {
    switch (navigationItem.onClickAction) {
      case NavAction.NAVIGATE:
        this.navigate(navigationItem)
        break;
      case NavAction.LOGOUT:
        this.logout(navigationItem)
        break;
    }
  }

  navigate(navigationItem: NavigationItem) {
    this.router.navigate([navigationItem.navigationRoute])
    // navigationItem.navigateAction(this.router, navigationItem.navigationRoute!)
  }

  logout(navigationItem: NavigationItem) {
    console.log(navigationItem)
    console.log('LOGOUT')
  }
}
