/**
 * Created by druker on 3/2/2017.
 */
import {NgModule} from "@angular/core";
import {MailRulesComponent} from "./rules.component";
import {RulesService} from "./rules.service";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {RuleDetailsModule} from "./ruleDetails.module";

@NgModule({
    declarations: [
        MailRulesComponent
    ],
    providers: [RulesService],
    imports: [HttpModule,
        BrowserModule,
        // my modules
        RuleDetailsModule
    ],
    exports: [MailRulesComponent]
})
export class MailRulesModule {
}
