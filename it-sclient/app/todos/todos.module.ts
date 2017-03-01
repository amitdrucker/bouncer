import {NgModule} from "@angular/core";
import {TodoService} from "./todo.service";
import {TodoListComponent} from "./todo-list.component";
import {CommonModule} from "@angular/common";
import {TaskUIComponent} from "./taskUI.component";
import {FormsModule} from "@angular/forms";
import {TotalComponent} from "./total.component";
import {HighlightDirective} from "./highlight.directive";

@NgModule({
    declarations:[
        // components
        TodoListComponent,
        TaskUIComponent,
        TotalComponent,
        // directives
        HighlightDirective
],
    /*providers   :[
        TodoService
    ],*/
    imports     :[
        CommonModule,
        FormsModule
    ],
    exports     :[TodoListComponent]
})
export class TodosModule{}