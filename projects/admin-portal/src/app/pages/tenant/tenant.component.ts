import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { PipeName } from "@common/pipes";
import { ListColumnDetails, ListComponent, ListSearchComponent } from "@common/ui/list";
import { BaseTenancy } from "tenant";
import { ButtonColor, ButtonComponent, ButtonShape, ButtonSize, ButtonStyle, HeaderDirective } from '@common/ui';
import { ListActionsDirective } from "@common/directives";

@Component({
    selector: 'kbm-ap-tenant',
    templateUrl: './tenant.component.html',
    standalone: true,
    imports: [CommonModule, ListSearchComponent, ListActionsDirective, ListComponent, HeaderDirective, ButtonComponent],
    styleUrls: ['./tenant.component.scss']
})

export class APTenantComponent {
    public ButtonColor = ButtonColor;
    public ButtonSize = ButtonSize;
    public ButtonStyle = ButtonStyle;
    public ButtonShape = ButtonShape;

    public tenancies: BaseTenancy[] = [
        {
            id: 1,
            name: 'Tenancy 1',
            country: 'Country 1',
            status: 'Status 1',
            createdAt: new Date,
            active: true
        },
        {
            id: 2,
            name: 'Tenancy 2',
            country: 'Country 2',
            status: 'Status 2',
            createdAt: new Date,
            active: true
        },
        {
            id: 3,
            name: 'Tenancy 3',
            country: 'Country 3',
            status: 'Status 3',
            createdAt: new Date,
            active: true
        },
        {
            id: 4,
            name: 'Tenancy 4',
            country: 'Country 4',
            status: 'Status 4',
            createdAt: new Date,
            active: true
        }
    ]
    public displayedColumnsDetails: ListColumnDetails[] = [
        {
            header: 'Name',
            key: 'name',
            main: true,
            sortable: true
        },
        {
            header: 'Active',
            key: 'active',
            pipe: PipeName.YES_NO,
            sortable: false
        },
        {
            header: 'Created at',
            key: 'createdAt',
            pipe: PipeName.DATE,
            sortable: false
        }
    ];
    constructor() { }
}