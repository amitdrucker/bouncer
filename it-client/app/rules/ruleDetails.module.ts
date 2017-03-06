/**
 * Created by druker on 3/6/17.
 */
import {NgModule} from '@angular/core';

import {RulesService} from "./rules.service";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {RuleDetailsComponent} from "./ruleDetails.component";
import {SingleColumnTableModule} from "./singleColumnTable.module";

@NgModule({
    imports: [HttpModule,
        BrowserModule,
        //my modules
        SingleColumnTableModule],
    exports: [RuleDetailsComponent],
    declarations: [RuleDetailsComponent],
    providers: [RulesService],
})
export class RuleDetailsModule {
}

