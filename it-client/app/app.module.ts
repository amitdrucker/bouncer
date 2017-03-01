import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RulesComponent} from "./counter.component";
import {FormsModule} from "@angular/forms";
import {TodosModule} from "./todos/todos.module";
import {ComponentsModule} from "./components/components.module";
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
    declarations:[
        AppComponent,
        RulesComponent
    ],
    providers   :[],
    bootstrap   :[AppComponent],
    imports     :[
        BrowserModule,
        FormsModule,
        HttpModule,

        // my Modules
        TodosModule,
        ComponentsModule
    ],
    exports     :[]
})
export class AppModule{}