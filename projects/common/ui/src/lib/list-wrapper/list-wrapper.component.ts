import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'kbm-list-wrapper',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './list-wrapper.component.html',
    styleUrls: ['./list-wrapper.component.scss']
})

export class ListWrapperComponent {
    constructor() { }
}