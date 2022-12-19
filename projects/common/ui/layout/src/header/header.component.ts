import { HeaderService } from './header.service';
import { Component } from "@angular/core";

@Component({
    selector: 'kbm-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    constructor(
        public headerService: HeaderService
    ) { }
}