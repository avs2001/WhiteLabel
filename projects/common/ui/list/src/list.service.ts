import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ListService {

    private searchListListener$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public readonly searchListListener: Observable<string> = this.searchListListener$.asObservable();

    constructor() { }

    setSearchListListener(searchTerm: string) {
        this.searchListListener$.next(searchTerm);
    }
}
