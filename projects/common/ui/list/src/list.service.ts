import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListName } from './list.enum';

@Injectable({
    providedIn: 'root'
})
export class ListService {

    private searchListListener$: BehaviorSubject<Map<ListName, string>> = new BehaviorSubject<Map<ListName, string>>(new Map());
    public readonly searchListListener: Observable<Map<ListName, string>> = this.searchListListener$.asObservable();

    constructor() { }

    setSearchListListener(listName: ListName, searchTerm: string) {
        this.searchListListener$.value.set(listName, searchTerm);
        this.searchListListener$.next(this.searchListListener$.value);
    }
}
