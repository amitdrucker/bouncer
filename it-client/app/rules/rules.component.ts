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
<div class="container">
	<div class="row">
           <select name="selectValue" onchange="mostra(this.value)">
                <option value=""></option>
             <option value="santos">Santos</option>
             <option value="retroPorto">Retro Porto</option>
             <option value="itajai">Itajai</option>
             <option value="paranagua">Paranaguá</option>
             <option value="curitiba">Curitiba</option>

             <option value="saoPaulo">Sao Paulo</option>

          </select>
		
		
		
		
		   <div class="esconde" id="opdRetro">
             <table class="table table-striped table-hover ">
            <thead>
                <tr class="bg-primary">
                    <th>Rule</th>
                    <th>Description</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody *ngIf="rules">

                <tr *ngFor="let rule of rules.rules">
            
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
