/**
 * Created by druker on 3/6/17.
 */
import {Component, Input} from '@angular/core';
import {RulesService} from "./rules.service";
import {Rule} from "./rule.class";

@Component({
    selector: 'rule-details',
    styles: [`
        .detailsRow {
            padding-top: 15px;
            overflow: hidden;
            border-bottom: 1px solid #eee;
        }

        .unscrollable {
            padding-top: 15px;
            overflow-y: hidden;
            border-bottom: 1px solid #eee;
            height: 165px;
        }

        .buttons {
            position: absolute;
            bottom: 5px;
        }
    `],
    template: `
        <span *ngIf="rule">
            <div class="detailsRow">
                <label>Name: </label> {{rule.name}}
                <br>
                <label>Description: </label> {{rule.description}}
            </div>
            <div class="unscrollable">
                <label>Emails</label>
                <br>
                <single-column-table
                        [items]="emails"
                        tooltip="enter an email address or just a suffix e.g. '@gmail.com'"
                ></single-column-table>
            </div>
            <div class="unscrollable">
                <label>Allowed Emails</label>
                <br>
                <single-column-table
                        [items]="allowedEmails"
                        tooltip="enter an email address or just a suffix e.g. '@gmail.com'"
                ></single-column-table>
            </div>
            <div class="unscrollable">
                <label>Disallowed Emails</label>
                <br>
                <single-column-table
                        [items]="disallowedEmails"
                        tooltip="enter an email address or just a suffix e.g. '@gmail.com'"
                ></single-column-table>
            </div>
            <div class="buttons">
                <button>Save</button>
                <button>Discard</button>
            </div>
                </span>
    `
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
