/**
 * Created by druker on 3/2/2017.
 */
import {Component} from "@angular/core";
import {RulesService} from "./rules.service";

@Component({
    selector: 'mail-rules',
    styles: [],
    template: `
<div>
  {{rules}}
  hello2
</div>
`
})
export class MailRulesComponent {
    private _rules: any;

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
                this._rules = JSON.stringify(rules);
            },
            (error) => {
                this._rules = "b"
            },
            () => {
                console.log('done')
            })
    }


}
