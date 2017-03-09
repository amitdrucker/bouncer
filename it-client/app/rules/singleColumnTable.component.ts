/**
 * Created by druker on 3/6/17.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'single-column-table',
    styles: [],
    template: `
        <input type="text" [(ngModel)]="value" placeholder="Add Item..."/>
        <button type="button" id="add" (click)="addItem()" [disabled]="!value"
                title="{{tooltip}}">Add
        </button>
        <button type="button" id="clear" (click)="clear()"
                [disabled]="!value">clear
        </button>
        <div style="overflow-y: auto; height: 97px">
            <div *ngFor="let item of items">
                <span class="glyphicon glyphicon-remove" (click)="removeItem(item)"></span>
                {{item}}
            </div>
        </div>
    `
})
export class SingleColumnTableComponent {
    value: string;

    constructor() {

    }

    @Input()
    tooltip: string;

    @Input()
    set items(items: Set<string>) {
        this._items = items;
    }

    get items() {
        return this._items;
    }

    _items: Set<string>;

    addItem() {
        this._items.add(this.value);
        delete this.value;
    }

    clear() {
        delete this.value;
    }

    removeItem(item) {
        this._items.delete(item);
    }
}
