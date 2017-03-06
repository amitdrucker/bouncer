/**
 * Created by druker on 3/2/2017.
 */
import {Component} from "@angular/core";
import {RulesService} from "./rules.service";
import {Rules} from "./rules.class";
import {Rule} from "./rule.class";

@Component({
    selector: 'mail-rules',
    styles: [
        'thead { height: 100% }',
        'tbody { height: 100% }'
    ],
    template: `

        <h1>Running Rules</h1>

        <table style="width: 100%; height: 100%">
            <tr>
                <td>
                    <div style="height: 100%; overflow-y: scroll">
                        <table class="table table-striped table-hover">
                            <thead>
                            <tr class="bg-primary">
                                <th></th>
                                <th>Rule</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody *ngIf="rules">
                            <tr *ngFor="let rule of rules.rules" (click)="onClick(rule)">
                                <td><input type="checkbox"/>
                                    <!--ng-model="string"-->
                                    <!--[name="string"]-->
                                    <!--[ng-true-value="expression"]-->
                                    <!--[ng-false-value="expression"]-->
                                    <!--[ng-change="string"]>-->
                                </td>
                                <td><a href="#">{{rule.name}}</a></td>
                                <td>{{rule.description}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
                <td style="padding: 15px; width: 40%; vertical-align: top;">
                    <rule-details *ngIf="previewItem" [rule]="previewItem"></rule-details>
                </td>
            </tr>
        </table>
    `
})
export class MailRulesComponent {
    private _rules: Rules;
    private previewItem: Rule;

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
        this.previewItem = rule;
    }
}
