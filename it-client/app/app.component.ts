import {Component} from "@angular/core";
import {RulesService} from "./rules/rules.service";

@Component({
    selector: 'my-app',
    styles: [],
    providers: [],
    template: `
        <div style="height: 100%;
            overflow-y: hidden;">
            <div style="width: 70%; height: 100%; overflow-y: hidden; float: left">
                <mail-rules></mail-rules>
            </div>
            <div style="float:left; width: 30%; 
            margin-top: 30px; border-top: 3px solid lightgray;
                 padding: 15px;">
                <rule-details *ngIf="service.previewItem" [rule]="service?.previewItem">
                </rule-details>
            </div>
        </div>

    `
})
export class AppComponent {
    constructor(private service: RulesService) {

    }
}