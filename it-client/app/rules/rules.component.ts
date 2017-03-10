/**
 * Created by druker on 3/2/2017.
 */
import {Component} from "@angular/core";
import {RulesService} from "./rules.service";
import {Rules} from "./rules.class";
import {Rule} from "./rule.class";

@Component({
    selector: 'mail-rules',
    styles: [],
    template: `
        <table class="table table-condensed table-hover" style="margin-bottom: 0px">
            <thead>
            <tr>
                <th style="width: 60px">
                    <input type="checkbox"
                           [checked]="isAllChecked()"
                           (click)="onCheckAll()">
                </th>
                <th style="width: 200px">Name</th>
                <th>Description</th>
            </tr>
            </thead>
        </table>
        <div style="height: 97%; overflow-y: auto">
            <table class="table table-condensed table-hover">
                <tbody>
                <tr *ngFor="let rule of rules?.rules" (click)="onClick(rule)">
                    <td style="width: 60px">
                        <input type="checkbox" [checked]="isChecked(rule)"
                               (click)="onCheck(rule)">
                    </td>
                    <td style="width: 200px">{{rule.name}}</td>
                    <td>{{rule.description}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    `
})
export class MailRulesComponent {
    private _rules: Rules;
    checked: Set<Rule> = new Set<Rule>();

    constructor(private service: RulesService) {
        this.loadRules();
    }

    get rules(): any {
        return this._rules;
    }

    onCheckAll() {
        if (this.isAllChecked()) {
            this.checked = new Set<Rule>();
        } else {
            this.checked = new Set<Rule>(this.rules.rules);
        }
    }

    onCheck(rule: Rule) {
        if (this.isChecked(rule)) {
            this.checked.delete(rule);
        } else {
            this.checked.add(rule);
        }
    }

    isChecked(rule: Rule) {
        return this.checked.has(rule);
    }

    isAllChecked() {
        if (!this.rules || !this.checked) {
            return false;
        }
        return this.checked.size === this.rules.rules.length;
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

    onClick(rule) {
        this.service.previewItem = rule;
    }
}
