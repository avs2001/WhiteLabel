import { Router } from '@angular/router';
import { NAVIGATION_ITEMS } from './sidebar.tokens';
import { LogoutMenuItem, RouterMenuItem } from './sidebar.utils';

export const navigationItemsProvider = {
    provide: NAVIGATION_ITEMS,
    useFactory(router: Router) {
        return [
            new RouterMenuItem('Dashboard', '/assets/icons/dashboard.svg', '/home', router, ['m-t-200']),
            new RouterMenuItem('Tenant', '/assets/icons/tenant.svg', '/tenant', router),
            new RouterMenuItem('User Management', '/assets/icons/user.svg', '/user', router),
            new RouterMenuItem('Device Management', '/assets/icons/device.svg', '/device', router),
            new LogoutMenuItem('Logout', '/assets/icons/logout.svg', ['item-logout']),
        ];
    },
    deps: [Router]
}