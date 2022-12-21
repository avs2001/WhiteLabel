import { CommonModule, DatePipe } from '@angular/common';
import { BaseUser, UserTypes } from '../user.model';
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { CdkTableModule } from '@angular/cdk/table';
import { YesNoPipe } from '@common/pipes';
import { ListActionsDirective } from '@common/directives';

const ELEMENT_DATA: BaseUser[] = [
    {
        id: 1,
        firstName: 'First Name 1',
        lastName: 'Last Name 1',
        username: 'Username 1',
        email: 'Email 1',
        userType: UserTypes.SuperAdmin,
        phone: '+306988582965',
        isActive: true,
        isPendingActivation: false,
        emailConfirmed: true,
        lastLoginTime: new Date().getTime(),
        isLocked: false,
        createdAt: 432432432
    },
    {
        id: 2,
        firstName: 'First Name 2',
        lastName: 'Last Name 2',
        username: 'Username 2',
        email: 'Email 2',
        userType: UserTypes.SuperAdmin,
        phone: '+306988582965',
        isActive: true,
        isPendingActivation: false,
        emailConfirmed: true,
        lastLoginTime: new Date().getTime(),
        isLocked: false,
        createdAt: 432432432
    },
    {
        id: 3,
        firstName: 'First Name 3',
        lastName: 'Last Name 3',
        username: 'Username 3',
        email: 'Email 3',
        userType: UserTypes.SuperAdmin,
        phone: '+306988582965',
        isActive: true,
        isPendingActivation: false,
        emailConfirmed: true,
        lastLoginTime: new Date().getTime(),
        isLocked: false,
        createdAt: 432432432
    }
];

@Component({
    selector: 'kbm-user-list',
    standalone: true,
    imports: [CommonModule, CdkTableModule, YesNoPipe, DatePipe],
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class UserListComponent {
    @ContentChild(ListActionsDirective)
    set actions(action: ListActionsDirective) {
      if (action) {
        this.actionsTpl = action.tpl;
        // this.displayedColumns.push('btns');
      }
    }

    displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 'userType', 'isActive', 'lastLoginTime', 'actions'];
    dataSource = new ExampleDataSource();
    actionsTpl!: TemplateRef<any>;

    constructor() { }

    ngOnInit() {
        console.log(this.dataSource)
    }
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<BaseUser> {
    /** Stream of data that is provided to the table. */
    data = new BehaviorSubject<BaseUser[]>(ELEMENT_DATA);

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<BaseUser[]> {
        return this.data;
    }

    disconnect() { }
}