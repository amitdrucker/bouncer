
import {Component, Input} from "@angular/core";
import {Task} from "./task.class";
import {TodoService} from "./todo.service";

@Component({
    selector: 'taskUI',
    styles: [`
    .box{
        border:1px solid yellow;
    }
`],
    template: `
<div class="box" [highlight]="{bg:'blue',id:123}" >
  <input type="checkbox" 
  [(ngModel)]="task.isDone"/>
  <ng-content></ng-content>
  <button (click)="remove()">x</button>
</div>
`
})
export class TaskUIComponent {
    @Input('source') task: Task;

    constructor(private todoBl:TodoService){}


    remove(){
        this.todoBl.remove(this.task);
    }
}