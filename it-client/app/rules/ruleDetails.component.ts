/**
 * Created by druker on 3/6/17.
 */
import {Component, Input} from '@angular/core';
import {RulesService} from "./rules.service";
import {Rule} from "./rule.class";

@Component({
    selector: 'rule-details',
    styles: [],
    template: `
        <table *ngIf="rule">
            <tr>Name: {{rule.name}}</tr>
            <tr>Description: {{rule.description}}</tr>
            <tr>
                <single-column-table
                        [items]="emails"
                        tooltip="enter an email address or just a suffix e.g. '@gmail.com'"
                ></single-column-table>
            </tr>
            <tr tooltip="enter wither a full email or just the suffix">Emails:
                <table>
                    <tr *ngFor="let email of emails">
                        <td>{{email}}</td>
                    </tr>
                </table>
            </tr>
            <tr *ngIf="disallowedEmails">disallowedEmails:
                <table>
                    <tr *ngFor="let disallowedEmail of disallowedEmails">
                        <td>{{disallowedEmail}}</td>
                    </tr>
                </table>
            </tr>
        </table>`
})
export class RuleDetailsComponent {
    emails: Set<string>;
    allowedEmails: Set<string>;
    disallowedEmails: Set<string>;

    @Input()
    set rule(rule: Rule) {
        this._rule = rule;
        this.emails = new Set(this._rule.emails);
        this.allowedEmails = new Set(this._rule.allowedEmails);
        this.disallowedEmails = new Set(this._rule.disallowedEmails);
    }

    get rule() {
        return this._rule;
    }

    constructor(private service: RulesService) {

    }

    _rule: Rule;
}
