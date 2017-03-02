/**
 * Created by druker on 3/2/2017.
 */
import {NgModule} from "@angular/core";
import {MailRulesComponent} from "./rules.component";
import {RulesService} from "./rules.service";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        MailRulesComponent
    ],
    providers: [RulesService],
    bootstrap: [],
    imports: [HttpModule],
    exports: [MailRulesComponent]
})
export class MailRulesModule {
}
