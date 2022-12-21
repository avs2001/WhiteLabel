import { CommonModule } from '@angular/common';
import { Component } from "@angular/core";
import { ListActionsDirective } from '@common/directives';
import { ButtonColor, ButtonComponent, ButtonShape, ButtonSize, ButtonStyle, HeaderDirective } from '@common/ui';
import { UserListComponent } from 'user';

@Component({
    selector: 'kbm-ap-user',
    standalone: true,
    imports: [CommonModule, ListActionsDirective, ButtonComponent, UserListComponent, HeaderDirective],
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class APUserComponent {
    public ButtonColor = ButtonColor;
    public ButtonSize = ButtonSize;
    public ButtonStyle = ButtonStyle;
    public ButtonShape = ButtonShape;

    constructor() { }
}