import {Component, Input, Output, EventEmitter} from "@angular/core";
import { Http, Response } from '@angular/http';

@Component({
    selector: 'rules',
    styles: [`
        .test{
            background-color: yellow;
        }
    `],
    template: `
<div class="aa" [class.test]="value % 2 === 0">
    <button (click)="down()">Down</button>
    <span [style.border]="border">{{value}}</span>
    <span *ngIf="value >= max">Cannot exceed max value</span>
    <button (click)="up()">Up</button>
</div>
`
})
export class RulesComponent {

    constructor (private http: Http) {
        this.http.get('localhost:3000/rules')

    }


    value: number = 0;
    @Input()
    max: number;

    @Output()
    on10: EventEmitter<number> = new EventEmitter();

    get border() {
        return `${this.value / 10}px solid red`
    }

    @Input() todos: any[];

    @Input()
    set init(val: {id: number, val: number}) {
        this.value = val.val;
    }

    _step: number;
    @Input()
    set step(value) {
        this._step = value;
    }

    get step() {
        return this._step;
    }


    up() {
        if (this.value > this.max) {
            return;
        }
        this.value += this.step;
        if (this.value > 110) {
            this.on10.emit(this.value);
        }
    }

    down() {
        this.value--;
    }
}
