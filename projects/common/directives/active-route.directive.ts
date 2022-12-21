import { Router } from '@angular/router';
import { RouterMenuItem } from './../../admin-portal/src/app/components/sidebar/sidebar.utils';
import { Directive, TemplateRef, Input, HostBinding } from '@angular/core';
import { MenuItem } from 'projects/admin-portal/src/app/components/sidebar/sidebar.utils';

@Directive({
    selector: '[kbmActiveRoute]',
    standalone: true
})
export class HeaderDirective {

    @HostBinding('class.active') get c1() { return this.isActive(); }

    @Input() set kbmActiveRoute(menuItem: MenuItem) {
        this.menuItem = menuItem;
    }

    menuItem!: MenuItem

    constructor(
        private router: Router
    ) {
    }

    isActive() {
        return (this.menuItem as RouterMenuItem).navigationRoute === this.router.url
    }

    ngOnDestroy(): void {
        console.log('DESTROY');
    }

}
