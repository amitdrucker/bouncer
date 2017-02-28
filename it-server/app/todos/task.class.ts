/**
 * Created by Eyal on 25/01/2017.
 */
let counter = 0;

export class Task{
    id:number;
    isDone: boolean;
    description:string;

    constructor(desc, isDone:boolean = false){
        this.id             = counter++;
        this.description    = desc;
        this.isDone         = isDone;
    }
}