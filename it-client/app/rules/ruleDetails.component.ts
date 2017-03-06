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
        <table *ngIf="item">
            <tr>Name: {{rule.name}}</tr>
            <tr>Description: {{rule.description}}</tr>
            <tr>
                <single-column-table
                        [items]="rule.accounts"
                        tooltip="enter an email address or just a suffix e.g. '@gmail.com'"
                ></single-column-table>
            </tr>
            <tr tooltip="enter wither a full email or just the suffix">Email Address:
                <table>
                    <tr *ngFor="let acc of rule.accounts">
                        <td>{{acc}}</td>
                    </tr>
                </table>
            </tr>
            <tr *ngIf="rule.partners">Partners:
                <table>
                    <tr *ngFor="let partner of rule.partners">
                        <td>{{partner}}</td>
                    </tr>
                </table>
            </tr>
        </table>`
})
export class RuleDetailsComponent {
    accounts : Set<string>;
    partners : Set<string>;

    constructor(private service: RulesService) {
        this.rule.partners
    }

    @Input()
    rule: Rule;
}
