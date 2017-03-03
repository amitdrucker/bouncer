/**
 * Created by druker on 3/2/2017.
 */
import {Component} from "@angular/core";
import {RulesService} from "./rules.service";
import {Rules} from "./rules.class";

@Component({
    selector: 'mail-rules',
    styles: [],
    template: `
<div>
  {{rules?.rules[0].accounts[0]}}
  hello2
</div>
`
})
export class MailRulesComponent {
    private _rules: Rules;

    constructor(private service: RulesService) {
        console.log("a");
        this.loadRules();
    }

    get rules(): any {
        return this._rules;
    }

    loadRules() {
        this.service.loadRules().subscribe(
            (rules) => {
                this._rules = rules;
            },
            (error) => {
                console.log(error);
                this._rules = new Rules();
            },
            () => {
                console.log('done')
            })
    }


}
