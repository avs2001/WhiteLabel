import { Component, HostBinding, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLIENT_LOGO_ICON, NAVIGATION_ITEMS } from './sidebar.tokens';
import { MatListItem, MatListModule } from '@angular/material/list';
import { MenuItem, RouterMenuItem } from './sidebar.utils';
import { navigationItemsProvider } from './sidebar.const';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'kbm-ap-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule, MatListModule],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    providers: [navigationItemsProvider]
})
export class APSidebarComponent {

    @Input()
    @HostBinding('class.opened')
    open!: boolean;

    constructor(
        @Inject(NAVIGATION_ITEMS) public navigationItems: MenuItem[],
        @Inject(CLIENT_LOGO_ICON) public clientLogoIcon: string,
        private router: Router
    ) { }

    isActive(navigationItem: MenuItem) {
        return (navigationItem as RouterMenuItem).navigationRoute === this.router.url
    }

}
