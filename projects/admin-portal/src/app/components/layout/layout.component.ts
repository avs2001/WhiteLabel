import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent, DrawerComponent, HeaderComponent, SideComponent, ToolbarComponent } from '@common/ui';
import { APSidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'kbm-ap-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, HeaderComponent, DrawerComponent, SideComponent, ContentComponent, ToolbarComponent, APSidebarComponent],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class APLayoutComponent {

}
