import {Injectable} from "@angular/core";
import {Task} from './task.class';

@Injectable()
export class TodoService{
    tempDesc:string;
    tasks:Task[] = [];

    add(desc:string){
        desc = desc || this.tempDesc || '';
        let task = new Task(desc)
        this.tasks.push(task);

    }
    remove(task:Task){
        let index = this.tasks.findIndex((x)=>x.id === task.id);
        this.tasks.splice(index,1);
    }


    get totalIsDone(){
        return this.tasks
            .filter((x)=>x.isDone)
            .length;
    }
}