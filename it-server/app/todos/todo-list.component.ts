/**
 * Created by Eyal on 25/01/2017.
 */
import {Component, ViewEncapsulation} from "@angular/core";
import {TodoService} from "./todo.service";
import {commonStyles} from "./styles";

console.log(`module.id:${module.id}`);


@Component({
  moduleId : module.id,
  selector: 'todo-list',
    encapsulation: ViewEncapsulation.Native,
  styles : [commonStyles],
  styleUrls:['aaaa.css'],
  providers   :[
        TodoService
    ],
  template: `
<div class="box">
  <h1>Todo List Demo</h1>
  <input type="text" #i />
    <button (click)="add(i.value)">Add task</button>
    <hr>
    <taskUI 
        [source]="task"
        *ngFor="let task of tasks">
        {{task.description}}
    </taskUI>
    <hr>
    <total></total>
</div>
`})
export class TodoListComponent {
    constructor(private todoBl:TodoService){}

    /*set tempDesc(value){ this.todoBl.tempDesc = value; }
    get tempDesc(){return this.todoBl.tempDesc;}*/
    get tasks(){
        return this.todoBl.tasks;
    }
    get totalIsDone(){
        return this.todoBl.totalIsDone;
    }


    add(desc){
        this.todoBl.add(desc);
    }

}