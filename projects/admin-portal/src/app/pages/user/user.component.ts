import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component } from "@angular/core";
import { ListActionsDirective } from '@common/directives';
import { ButtonColor, ButtonComponent, ButtonShape, ButtonSize, ButtonStyle, HeaderDirective } from '@common/ui';
import { ListColumnDetails, ListComponent, ListSearchComponent } from '@common/ui/list';
import { BaseUser, UserListComponent, UserTypes } from 'user';
import { PipeName } from '@common/pipes';

@Component({
    selector: 'kbm-ap-user',
    standalone: true,
    imports: [CommonModule, ListSearchComponent, ListActionsDirective, ButtonComponent, UserListComponent, HeaderDirective, ListComponent],
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class APUserComponent {
    public ButtonColor = ButtonColor;
    public ButtonSize = ButtonSize;
    public ButtonStyle = ButtonStyle;
    public ButtonShape = ButtonShape;

    public users: BaseUser[] = [
            {
                id: 1,
                firstName: 'First Name 1',
                lastName: 'Last Name 1',
                username: 'Username 1',
                email: 'Email 1',
                userType: UserTypes.ITAdmin,
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
            },
            {
                id: 4,
                firstName: 'First Name 4',
                lastName: 'Last Name 4',
                username: 'Username 4',
                email: 'Email 4',
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
                id: 5,
                firstName: 'First Name 5',
                lastName: 'Last Name 5',
                username: 'Username 5',
                email: 'Email 5',
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
                id: 6,
                firstName: 'First Name 6',
                lastName: 'Last Name 6',
                username: 'Username 6',
                email: 'Email 6',
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
                id: 7,
                firstName: 'First Name 7',
                lastName: 'Last Name 7',
                username: 'Username 7',
                email: 'Email 7',
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
                id: 8,
                firstName: 'First Name 8',
                lastName: 'Last Name 8',
                username: 'Username 8',
                email: 'Email 8',
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
                id: 9,
                firstName: 'First Name 9',
                lastName: 'Last Name 9',
                username: 'Username 9',
                email: 'Email 9',
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
                id: 10,
                firstName: 'First Name 10',
                lastName: 'Last Name 10',
                username: 'Username 10',
                email: 'Email 10',
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
                id: 11,
                firstName: 'First Name 11',
                lastName: 'Last Name 11',
                username: 'Username 11',
                email: 'Email 11',
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
                id: 12,
                firstName: 'First Name 12',
                lastName: 'Last Name 12',
                username: 'Username 12',
                email: 'Email 12',
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
                id: 13,
                firstName: 'First Name 13',
                lastName: 'Last Name 13',
                username: 'Username 13',
                email: 'Email 13',
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
                id: 14,
                firstName: 'First Name 14',
                lastName: 'Last Name 14',
                username: 'Username 14',
                email: 'Email 14',
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
                id: 15,
                firstName: 'First Name 15',
                lastName: 'Last Name 15',
                username: 'Username 15',
                email: 'Email 15',
                userType: UserTypes.SuperAdmin,
                phone: '+306988582965',
                isActive: true,
                isPendingActivation: false,
                emailConfirmed: true,
                lastLoginTime: new Date().getTime(),
                isLocked: false,
                createdAt: 432432432
            }
        ]


    public displayedColumnsDetails: ListColumnDetails[] = [
        {
            header: 'Username',
            key: 'username',
            main: true,
            sortable: true
        },
        {
            header: 'First Name',
            key: 'firstName',
            sortable: true
        },
        {
            header: 'Last Name',
            key: 'lastName',
            sortable: true
        },
        {
            header: 'Email',
            key: 'email',
            sortable: true
        },
        {
            header: 'Role',
            key: 'userType',
            sortable: false
        },
        {
            header: 'Is Active',
            key: 'isActive',
            pipe: PipeName.YES_NO,
            sortable: false
        },
        {
            header: 'Last Login',
            key: 'lastLoginTime',
            pipe: PipeName.DATE,
            sortable: false
        }
    ];

    constructor() { }
}