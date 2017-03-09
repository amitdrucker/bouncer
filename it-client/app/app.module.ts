import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {MailRulesModule} from "./rules/rules.module";
import {RuleDetailsModule} from "./rules/ruleDetails.module";
import {MailRulesComponent} from "./rules/rules.component";
import {RuleDetailsComponent} from "./rules/ruleDetails.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpModule,
        // my modules
        MailRulesModule,
        RuleDetailsModule

    ],
    exports: []
})
export class AppModule {
}