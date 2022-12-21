import { CommonModule } from '@angular/common';
import { Component } from "@angular/core";
import { HeaderDirective } from '@common/ui';
import { UserListComponent } from 'user';

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