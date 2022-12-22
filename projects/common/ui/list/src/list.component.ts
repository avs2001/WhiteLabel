import { CommonModule, DatePipe } from '@angular/common';
import { Component, ContentChild, Input, Pipe, TemplateRef, HostBinding } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, take } from 'rxjs';
import { CdkTableModule } from '@angular/cdk/table';
import { PipeName, YesNoPipe } from '@common/pipes';
import { ListActionsDirective } from '@common/directives';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchInputComponent } from '@common/ui';
import { ListColumnDetails } from './list.model';

@Component({
  selector: 'kbm-list',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule, ReactiveFormsModule, FormsModule, CdkTableModule, YesNoPipe, DatePipe, SearchInputComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  @Input() title!: string;
  @Input() startingPage: number = 1;
  @Input() datePipeFormat: string = 'MMM d, y, h:mm:ss a';
  @Input() itemsPerPage: number = 10;
  @Input() maxPaginationSize: number = 5;
  @Input() listItems: any[] = []
  listItems$!: BehaviorSubject<any[]>;
  @Input() sortKeyName: string = "";
  @Input() displayedColumnsDetails: ListColumnDetails[] = [];
  displayedColumnsKeys!: string[];
  PipeName = PipeName

  tableDataSource$ = new BehaviorSubject<any[]>([]);
  currentPage$!: BehaviorSubject<number>;
  pageSize$!: BehaviorSubject<number>;
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  searchFormControl = new FormControl();
  sortKey$!: BehaviorSubject<string>;
  sortDirection$ = new BehaviorSubject<string>('asc');

  @ContentChild(ListActionsDirective)
  set actions(action: ListActionsDirective) {
    if (action) {
      this.actionsTpl = action.tpl;
      this.displayedColumnsKeys.push('actions')
    }
  }

  actionsTpl!: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    this.listItems$ = new BehaviorSubject<any[]>(this.listItems);
    this.displayedColumnsKeys = this.displayedColumnsDetails.map(el => el.key)
    this.currentPage$ = new BehaviorSubject<number>(this.startingPage);
    this.pageSize$ = new BehaviorSubject<number>(this.itemsPerPage);
    this.sortKey$ = new BehaviorSubject<string>(this.sortKeyName);

    combineLatest([this.tableDataSource$, this.currentPage$, this.pageSize$])
      .subscribe(([allSources, currentPage, pageSize]) => {
        const startingIndex = (currentPage - 1) * pageSize;
        const onPage = allSources.slice(startingIndex, startingIndex + pageSize);
        this.dataOnPage$.next(onPage);
        this.hideVisuallyHiddenBug();
      });

    this.listItems$.pipe(take(1)).subscribe(listItemsData => {
      this.tableDataSource$.next(Object.values(listItemsData));
    });

    combineLatest([this.listItems$, this.searchFormControl.valueChanges, this.sortKey$, this.sortDirection$])
      .subscribe(([changedListItemsData, searchTerm, sortKey, sortDirection]) => {
        const listItemsArray = Object.values(changedListItemsData);
        let filteredItems: any[];

        if (!searchTerm) {
          filteredItems = listItemsArray;
        } else {
          const filteredResults = listItemsArray.filter(listItem => {
            return Object.values(listItem)
              .reduce((prev, curr) => {
                return prev || curr!.toString().toLowerCase().includes(searchTerm.toLowerCase());
              }, false);
          });
          filteredItems = filteredResults;
        }

        const sortedListItems = filteredItems.sort((a, b) => {
          if (a[sortKey] > b[sortKey]) return sortDirection === 'asc' ? 1 : -1;
          if (a[sortKey] < b[sortKey]) return sortDirection === 'asc' ? -1 : 1;
          return 0;
        });

        this.tableDataSource$.next(sortedListItems);
      });

    this.searchFormControl.setValue('');
  }

  ngAfterViewInit() {
    this.hideVisuallyHiddenBug();
  }

  // This is a bug from bootstrap which shows (current) text to active page in pagination
  hideVisuallyHiddenBug() {
    setTimeout(() => {
      const elementsArray = document.getElementsByClassName('visually-hidden');
      [].forEach.call(elementsArray, (el: any) => {
        el.style.display = 'none'
      });
    }, 0);
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

  over(event: any){
    console.log(event)
  }

}