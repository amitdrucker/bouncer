/**
 * Created by Eyal on 25/01/2017.
 */
import {Component} from "@angular/core";
import {TodoService} from "./todo.service";

@Component({
  selector: 'total',
  styles : [],
  template: `
<div>
  total {{total}} / {{totalIsDone}}
</div>
`})
export class TotalComponent {
  constructor(private todoBl:TodoService){}

  get total(){
      return this.todoBl.tasks.length;
  }
  get totalIsDone(){
      return this.todoBl.totalIsDone;

  }
}