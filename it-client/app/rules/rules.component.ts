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
        'table { height: 100% }',
        'thead { height: 100% }',
        'tbody { height: 100% }',


    ],
    template: `

<h1>Running Rules</h1>

<table style="width: 100%">
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
            <table *ngIf="previewItem">
                <tr>Name: {{previewItem.name}}</tr>
                <tr>Description: {{previewItem.description}}</tr>
                <tr>Accounts: 
                    <table>
                        <tr *ngFor="let acc of previewItem.accounts">
                            <td>{{acc}}</td>
                        </tr>
                    </table>
                </tr>
                <tr *ngIf="previewItem.partners">Partners: 
                    <table>
                        <tr *ngFor="let partner of previewItem.partners">
                            <td>{{partner}}</td>
                        </tr>
                    </table>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!--<nav style="height: 100%; padding: 15px;">-->
    <!--<div class="row" style="height: 100%">-->
        <!--<div style="height: 70%; overflow-y: scroll">-->
 <!---->
<!--</div>-->
<!--</div>-->
<!--</nav>-->


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
