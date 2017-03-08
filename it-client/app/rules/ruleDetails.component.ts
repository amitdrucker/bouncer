/**
 * Created by druker on 3/6/17.
 */
import {Component, Input} from '@angular/core';
import {RulesService} from "./rules.service";
import {Rule} from "./rule.class";

@Component({
    selector: 'rule-details',
    styles: [`
        /*single-column-table {*/
        /*min-height: 50px;*/
        /*max-height: 200px;*/
        /*overflow-y: scroll;*/
        /*}*/
        div {
            height: 150px;
            overflow-y: auto;
        }
    `],
    template: `
        <div *ngIf="rule" style="height: 100%">
            <div style="height: 20px; overflow: hidden">
                <label>Name: </label> {{rule.name}}
            </div>
            <hr>
            <div style="height: 20px; overflow-y: hidden">
                <label>Description: </label> {{rule.description}}
            </div>
            <hr>
            <div>
                <label>Emails</label>
                <br>
                <single-column-table
                        [items]="emails"
                        tooltip="enter an email address or just a suffix e.g. '@gmail.com'"
                ></single-column-table>
            </div>
            <hr>
            <div>
                <label>Allowed Emails</label>
                <br>
                <single-column-table
                        [items]="allowedEmails"
                        tooltip="enter an email address or just a suffix e.g. '@gmail.com'"
                ></single-column-table>
            </div>
            <hr>
            <div>
                <label>Disallowed Emails</label>
                <br>
                <single-column-table
                        [items]="disallowedEmails"
                        tooltip="enter an email address or just a suffix e.g. '@gmail.com'"
                ></single-column-table>
            </div>
            <hr>
        </div>`
})
export class RuleDetailsComponent {
    emails: Set<string>;
    allowedEmails: Set<string>;
    disallowedEmails: Set<string>;

    @Input()
    set rule(rule: Rule) {
        this._rule = rule;
        this.emails = !this._rule.emails ? new Set() : new Set(this._rule.emails);
        this.allowedEmails = !this._rule.allowedEmails ? new Set() : new Set(this._rule.allowedEmails);
        this.disallowedEmails = !this._rule.disallowedEmails ? new Set() : new Set(this._rule.disallowedEmails);
    }

    get rule() {
        return this._rule;
    }

    constructor(private service: RulesService) {

    }

    _rule: Rule;
}
