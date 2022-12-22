import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SearchInputComponent } from "@common/ui";
import { ListService } from '../list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'kbm-list-search',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SearchInputComponent],
    templateUrl: './list-search.component.html',
    styleUrls: ['./list-search.component.scss']
})

export class ListSearchComponent {
    subscriptions: Subscription[] = [];
    searchFormControl = new FormControl();
    constructor(
        private listService: ListService
    ) { }

    ngOnInit() {
        this.subscriptions.push(
            this.searchFormControl.valueChanges.subscribe(res => {
                this.listService.setSearchListListener(res)
            })
        )
    }
    
    ngOnDestroy() {
      this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}