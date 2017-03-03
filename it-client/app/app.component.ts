import {Component, VERSION} from "@angular/core";

let num = 1;

@Component({
    selector: 'my-app',
    styles: [`
    .blabla{
        background-color: yellow;
    }
`],
    template: `
    <div>
        <mail-rules></mail-rules>
        <!--<nav>-->
            <!--<a routerLink="/home">Home</a> |-->
            <!--<a routerLink="/users">Users</a> |-->
            <!--<a routerLink="/movies">movies</a> |-->
        <!--</nav>-->
        <!--<div>-->
            <!--<router-outlet></router-outlet>-->
        <!--</div>-->
    </div>

<!--    <div>
        <h1 highlight="red" #ff>{{total.val}} ${VERSION.full} {{name}}</h1>  
       &lt;!&ndash; <img src="{{pic}}"> 
        <img [src]="pic">&ndash;&gt;
        
        <tabs>
            <tab title="users"><users></users></tab>
            <tab title="mdd">
                <mdd></mdd>
            </tab>
            <tab title="accordion">
                <accordion>
                    <template let-car>
                        <h3>{{car.name}}</h3>
                        <div>{{car.desc}}</div>
                    </template>
                </accordion>
            </tab>
            <tab title="dropdownlist">
                <dropDownList [source]="[{name:'bmv',model:123},{name:'bmw',model:33}]">
                    <template let-car="item">
                        <div> <strong>{{car.name}}</strong> - {{car.model}}</div>
                    </template>
                </dropDownList>
            </tab>
            <tab title="counter">
                 <counter
                        [init]="10"
                        [step]="3"
                        [max] ="17" 
                        [min] = "5"
                        (onMax)="value = $event"
                        (onMin)="value = $event"
                    ></counter>
            </tab>
            <tab title="todo list">
                     <todoList></todoList>
                    <hr>
                    <todoList></todoList>
            </tab>
            <tab title="t1">
                <h1>this is tabs</h1>
                 <tabs>
                    <tab title="t1">
                        <h1>this is tabs</h1>
                        
                    </tab>
                    <tab title="t" *ngFor="let t of [1,2,3]">
                        {{t}}
                    </tab>
                </tabs>
            </tab>
            <tab title="t" *ngFor="let t of [1,2,3]">
                {{t}}
            </tab>
        </tabs>
        
        <button  (click)="up()">click me!!!</button>
        <br><br><br>
       
        {{value}}
      &lt;!&ndash;  
        +++++++++++++++++
        <div *ngIf="true"
                [class.blabla]="true"
                [style.border]="border"
                [attr.bla]="123"
                [innerHtml]="ff.innerHTML">            
            </div>
        +++++++++++++++++
        <ng-container *ngIf="true">
            <div 
                [class.blabla]="true"
                [style.border]="border"
                [attr.bla]="123"
                [innerHtml]="'<h1>hello !!!!</h1>'">            
            </div>
            <div>dsfdfdf</div>
        </ng-container>
        
        <div *ngFor="let i of [1,2,'bla','xxx']; let e=index;let l=last">
            {{e}} - i : {{i}}
            <span *ngIf="l" [ngClass]="{a:true,b:false,blabla:true}">end !!!</span>
        </div>
        &ndash;&gt;
    </div>-->
`
})
export class AppComponent {
    name: string = "eyal"
    pic: string = 'pic.jpg';
    value: number = 10;

    constructor() {
    }


    get border() {
        return `${num}px solid black`;
    }

    up() {
        num++;
    }
}

//Log({})(Component({})(AppComponent));

function Log(arg) {
    return function (target) {

        return target;
    }
}