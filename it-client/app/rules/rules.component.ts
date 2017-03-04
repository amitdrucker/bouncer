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
        // 'div { height: 100%; overflow-y: scroll }'
    ],
    template: `<div class="container" style="height: 100%">
	<div class="row" style="height: 100%">
           <div style="height: 70%; overflow-y: scroll">
             <table class="table table-striped table-hover ">
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
<div style="padding: 15px" *ngIf="previewItem">
<div>Name: {{previewItem.name}}</div>
<div>Description: {{previewItem.description}}</div>
<div>Accounts: 
<table>
<tr *ngFor="let acc of previewItem.accounts">
<td>{{acc}}</td>
</tr>
</table>
</div>
<div *ngIf="previewItem.partners">Partners: 
<table>
<tr *ngFor="let partner of previewItem.partners">
<td>{{partner}}</td>
</tr>
</table>
</div>
</div>
</div>
    </div>
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
