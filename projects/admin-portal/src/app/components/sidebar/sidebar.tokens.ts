import { InjectionToken } from "@angular/core";
import { Router } from "@angular/router";
import { LogoutMenuItem, MenuItem, RouterMenuItem } from "./sidebar.utils";




export const CLIENT_LOGO_ICON: InjectionToken<string> = new InjectionToken<string>('CLIENT_LOGO_ICON', {
    factory: () => ('/assets/icons/logo.svg'),
})

export const NAVIGATION_ITEMS: InjectionToken<MenuItem[]> = new InjectionToken<MenuItem[]>('NAVIGATION_ITEMS');

