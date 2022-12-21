import { CommonModule } from '@angular/common';
import { Component } from "@angular/core";
import { HeaderDirective } from '@common/ui/layout';
import { UserListComponent } from 'projects/user/shared';

@Component({
    selector: 'kbm-ap-user',
    standalone: true,
    imports: [CommonModule, UserListComponent, HeaderDirective],
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class APUserComponent {
    constructor() { }
}