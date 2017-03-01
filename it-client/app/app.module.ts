import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations:[
        AppComponent
    ],
    providers   :[
    ],
    bootstrap   :[AppComponent],
    imports     :[
        BrowserModule,
        HttpModule
    ],
    exports     :[]
})
export class AppModule{}