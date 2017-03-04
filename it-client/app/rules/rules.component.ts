/**
 * Created by druker on 3/2/2017.
 */
import {Component} from "@angular/core";
import {RulesService} from "./rules.service";
import {Rules} from "./rules.class";

@Component({
    selector: 'mail-rules',
    styles: [
        // 'div { height: 100%; overflow-y: scroll }'
    ],
    template: `
<div class="container" style="height: 100%">
	<div class="row" style="height: 100%">
           <div class="esconde" id="opdRetro" style="height: 70%; overflow-y: scroll">
             <table class="table table-striped table-hover ">
            <thead>
                <tr class="bg-primary">
                    <th></th>
                    <th>Rule</th>
                    <th>Description</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody *ngIf="rules">

                <tr *ngFor="let rule of rules.rules">
                <td><input type="checkbox"/>
                    <!--ng-model="string"-->
                    <!--[name="string"]-->
                    <!--[ng-true-value="expression"]-->
                    <!--[ng-false-value="expression"]-->
                    <!--[ng-change="string"]>-->
                </td>
                    <td>{{rule.name}}</td>
                    <td>{{rule.description}}</td>
                    <td><a href="#">click to view...</a></td> 

                </tr>
</tbody>
</table>
</div>
</div>
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


}
