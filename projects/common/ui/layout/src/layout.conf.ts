export enum NavAction {
    NAVIGATE = 'navigate',
    LOGOUT = 'logout'
}

// export interface NavigationItem {
//     txt: string,
//     icon: string,
//     navigationRoute?: string,
//     matListItemExtraClass?: string[],
//     navigateAction(router: Router, route: string): void
// }

export interface NavigationItem {
    txt: string,
    icon: string,
    navigationRoute?: string,
    matListItemExtraClass?: string[],
    onClickAction: NavAction
}

export const clientLogoIcon: string = '/assets/icons/logo.svg'

export const navigationItems: NavigationItem[] = [
    {
        txt: 'Dashboard',
        icon: '/assets/icons/dashboard.svg',
        navigationRoute: '/home',
        matListItemExtraClass: ['m-t-200'],
        onClickAction: NavAction.NAVIGATE
    },
    {
        txt: 'Tenant',
        icon: '/assets/icons/tenant.svg',
        navigationRoute: '/tenant',
        onClickAction: NavAction.NAVIGATE
    },
    {
        txt: 'User Management',
        icon: '/assets/icons/user.svg',
        navigationRoute: '/user',
        onClickAction: NavAction.NAVIGATE
    },
    {
        txt: 'Device Management',
        icon: '/assets/icons/device.svg',
        navigationRoute: '/device',
        onClickAction: NavAction.NAVIGATE
    },
    {
        txt: 'Logout',
        icon: '/assets/icons/logout.svg',
        matListItemExtraClass: ['item-logout'],
        onClickAction: NavAction.LOGOUT
    }
];
