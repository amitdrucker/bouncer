/**
 * Created by druker on 3/6/17.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'single-column-table',
    styles: [`
        h2 {
            font-family: arial;
        }

        form {
            display: inline-block;
        }

        .list {
            font-family: "Trebuchet MS";
            font-size: 20px;
            color: #000000;
            cursor: pointer;
        }
    `],
    template: `
        <input type="text" [(ngModel)]="value" placeholder="Add Item..."/>
        <button type="button" id="add" class="btn btn-info" (click)="addItem()" [disabled]="!value"
                title="{{tooltip}}">Add
        </button>
        <button type="button" id="clear" title="Clear checked items" class="btn btn-default" (click)="clear()"
                [disabled]="!value">clear
        </button>
        <div *ngFor="let item of items" class="list">
            <span class="glyphicon glyphicon-remove" (click)="removeItem(item)"></span>
            {{item}}
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
