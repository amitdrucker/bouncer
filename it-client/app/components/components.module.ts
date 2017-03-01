/**
 * Created by Eyal on 25/01/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TabsComponent} from "./tabs.component";
import {TabComponent} from "./tab.component";

@NgModule({
    declarations:[
        TabsComponent,
        TabComponent
    ],
    imports     :[
        CommonModule
    ],
    exports     :[
        TabsComponent,
        TabComponent
    ]
})
export class ComponentsModule{}