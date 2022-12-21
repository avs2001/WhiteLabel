import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, HostBinding, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLIENT_LOGO_ICON, NAVIGATION_ITEMS } from './sidebar.tokens';
import { MatListItem, MatListModule } from '@angular/material/list';
import { MenuItem, RouterMenuItem } from '@common/utils';
import { navigationItemsProvider } from './sidebar.const';
import { Router, RouterModule } from '@angular/router';
import { ActiveRouteDirective } from '@common/directives';

@Component({
    selector: 'kbm-ap-sidebar',
    standalone: true,
    imports: [CommonModule, BrowserAnimationsModule, RouterModule, MatListModule, ActiveRouteDirective],
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
        @Inject(CLIENT_LOGO_ICON) public clientLogoIcon: string
    ) { }

    getNavigationRoute(navigationItem: MenuItem) {
        return (navigationItem as RouterMenuItem).navigationRoute ? (navigationItem as RouterMenuItem).navigationRoute : 'no-navigation'
    }
}
