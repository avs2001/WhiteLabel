import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { SearchInputComponent } from "@common/ui";
import { ListService } from '../list.service';
import { Subscription } from 'rxjs';
import { ListName } from '../list.enum';

@Component({
    selector: 'kbm-list-search',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SearchInputComponent],
    templateUrl: './list-search.component.html',
    styleUrls: ['./list-search.component.scss']
})

export class ListSearchComponent {
    @Input() listName!: ListName;
    subscriptions: Subscription[] = [];
    searchFormControl = new FormControl();
    constructor(
        private listService: ListService
    ) { }

    ngOnInit() {
        this.subscriptions.push(
            this.searchFormControl.valueChanges.subscribe(res => {
                this.listService.setSearchListListener(this.listName, res)
            })
        )
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}