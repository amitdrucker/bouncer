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
                <th class="span1"><input type="checkbox"></th>
                <th class="span2">Name</th>
                <th class="span9">Description</th>
            </tr>
            </thead>
        </table>
        <div style="height: 94%; overflow-y: auto">
            <table class="table table-condensed table-hover">
                <tbody>
                <tr *ngFor="let rule of rules?.rules" (click)="onClick(rule)">
                    <td><input type="checkbox"> <a href="#"><i class="icon-star-empty"></i></a></td>
                    <td><strong>{{rule.name}}</strong></td>
                    <td><strong>{{rule.description}}</strong></td>
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
