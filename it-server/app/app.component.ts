/**
 * Created by Eyal on 23/01/2017.
 */
import {Component,VERSION} from "@angular/core";


@Component({
    selector:'my-app',
    template:`
    <div>
        <h1>Outlook Bouncer</h1>
        <tabs>
            <tab title="Manage Rules">
                <rules #c
                    (on10)="name = $event"
                    [todos]="isAAA" 
                    [step]="3"
                    [max]="120"
                    [init]="{id:123,val:val}"></rules>
                </tab>
            <tab title="Logs">
                <todo-list ></todo-list>
            </tab>
        </tabs>
        
        
        
        
      <!--  <todo-list></todo-list>-->
        
        <!--<div (click)="c.up()">Click me !!!{{c.value}}</div>
        <div [innerHtml]="'<h1>+++++++</h1>'"></div>
        
        <input type="text" 
            [value]="name" 
            (input)="name = $event.target.value">
            
        <input type="text" 
            [(ngModel)]="name">
        
        {{user?.id}}
        {{user?.name}}
        <ngCounter #c
            (on10)="name = $event"
            [todos]="isAAA" 
            [step]="3"
            [init]="{id:123,val:val}"></ngCounter>-->
    </div>
`})
export class AppComponent{
    items = [1,2,3,4];
    name:string = 'eyal';
    user //= {id:123,name:'eyal'};


    val:number = 100;
    constructor(){
        /*setInterval(()=>{
            this.name += '!';
        },1000);*/
    }
    get isAAA(){
        return this.items.length > 5;
    }

    onClick(event:MouseEvent){
        console.log(`on click: ${JSON.stringify(event)}`);
        //event.stopPropagation();
    }
}



/*

Log(true)(
    Component({})(
        AppComponent
    )
);

function Log(isDebug:boolean){
    return (target)=>{
        target.prototype.log = function () {

        };
        return target;
    }
}*/
/*
var seI = setInterval;
window.setInterval = function (fn,ms) {
  seI(()=>{
      fn();
      tick();
  },ms)
};*/
