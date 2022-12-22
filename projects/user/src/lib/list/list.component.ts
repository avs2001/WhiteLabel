import { CommonModule, DatePipe } from '@angular/common';
import { BaseUser, UserTypes } from '../user.model';
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, combineLatest, Observable, take } from 'rxjs';
import { CdkTableModule } from '@angular/cdk/table';
import { YesNoPipe } from '@common/pipes';
import { ListActionsDirective } from '@common/directives';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchInputComponent } from '@common/ui';

@Component({
  selector: 'kbm-user-list',
  standalone: true,
  imports: [CommonModule, NgbModule, ReactiveFormsModule, FormsModule, CdkTableModule, YesNoPipe, DatePipe, SearchInputComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class UserListComponent {

  itemsPerPage: number = 4
  maxPaginationSize: number = 5;
  users$ = new BehaviorSubject<BaseUser[]>(
    [
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
  );
  tableDataSource$ = new BehaviorSubject<any[]>([]);
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(this.itemsPerPage);
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  searchFormControl = new FormControl();
  sortKey$ = new BehaviorSubject<string>('name');
  sortDirection$ = new BehaviorSubject<string>('asc');

  @ContentChild(ListActionsDirective)
  set actions(action: ListActionsDirective) {
    if (action) {
      this.actionsTpl = action.tpl;
      // this.displayedColumns.push('btns');
    }
  }

  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 'userType', 'isActive', 'lastLoginTime', 'actions'];
  actionsTpl!: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    this.users$.subscribe(changedUsersData => {

      Object.values(changedUsersData).forEach(user => {
        Object.keys(user).forEach(key => {
          if (key === 'name' || key === 'types') { return; }
        });
      });

    });

    combineLatest([this.tableDataSource$, this.currentPage$, this.pageSize$])
      .subscribe(([allSources, currentPage, pageSize]) => {
        const startingIndex = (currentPage - 1) * pageSize;
        const onPage = allSources.slice(startingIndex, startingIndex + pageSize);
        this.dataOnPage$.next(onPage);
        this.hideVisuallyHiddenBug();
      });

    this.users$.pipe(take(1)).subscribe(usersData => {
      this.tableDataSource$.next(Object.values(usersData));
    });

    combineLatest([this.users$, this.searchFormControl.valueChanges, this.sortKey$, this.sortDirection$])
      .subscribe(([changedUsersData, searchTerm, sortKey, sortDirection]) => {
        const usersArray = Object.values(changedUsersData);
        let filteredUsers: any[];

        if (!searchTerm) {
          filteredUsers = usersArray;
        } else {
          const filteredResults = usersArray.filter(user => {
            return Object.values(user)
              .reduce((prev, curr) => {
                return prev || curr.toString().toLowerCase().includes(searchTerm.toLowerCase());
              }, false);
          });
          filteredUsers = filteredResults;
        }

        const sortedUsers = filteredUsers.sort((a, b) => {
          if (a[sortKey] > b[sortKey]) return sortDirection === 'asc' ? 1 : -1;
          if (a[sortKey] < b[sortKey]) return sortDirection === 'asc' ? -1 : 1;
          return 0;
        });

        this.tableDataSource$.next(sortedUsers);
      });

    this.searchFormControl.setValue('');
  }

  ngAfterViewInit() {
    // This is a bug from bootstrap which shows (current) text to active page
    this.hideVisuallyHiddenBug();
  }

  hideVisuallyHiddenBug() {
    if (document.getElementsByClassName('visually-hidden')[0])
      (document.getElementsByClassName('visually-hidden')[0] as HTMLElement).style.display = 'none'
  }

  adjustSort(key: string) {
    if (this.sortKey$.value === key) {
      if (this.sortDirection$.value === 'asc') {
        this.sortDirection$.next('desc');
      } else {
        this.sortDirection$.next('asc');
      }
      return;
    }

    this.sortKey$.next(key);
    this.sortDirection$.next('asc');
  }

  mouseo(event: any) {
    console.log(event.fromElement)
  }
}