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
        <table class="table table-condensed table-hover" style="margin-bottom: 0px">
            <thead>
            <tr>
                <th style="width: 60px"><input type="checkbox"></th>
                <th style="width: 200px">Name</th>
                <th>Description</th>
            </tr>
            </thead>
        </table>
        <div style="height: 97%; overflow-y: auto">
            <table class="table table-condensed table-hover">
                <tbody>
                <tr *ngFor="let rule of rules?.rules" (click)="onClick(rule)">
                    <td style="width: 60px"><input type="checkbox"></td>
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

    constructor(private service: RulesService) {
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

    onClick(rule) {
        this.service.previewItem = rule;
    }
}
