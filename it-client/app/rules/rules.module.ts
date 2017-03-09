/**
 * Created by druker on 3/2/2017.
 */
import {NgModule} from "@angular/core";
import {MailRulesComponent} from "./rules.component";
import {RulesService} from "./rules.service";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [
        MailRulesComponent
    ],
    providers: [RulesService],
    imports: [HttpModule,
        BrowserModule
    ],
    exports: [MailRulesComponent]
})
export class MailRulesModule {
}
