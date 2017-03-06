/**
 * Created by druker on 3/6/17.
 */
import {NgModule} from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {SingleColumnTableComponent} from "./singleColumnTable.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [HttpModule,
        BrowserModule,
        FormsModule],
    exports: [SingleColumnTableComponent],
    declarations: [SingleColumnTableComponent],
    providers: [],
})
export class SingleColumnTableModule {
}

