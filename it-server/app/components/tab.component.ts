/**
 * Created by Eyal on 25/01/2017.
 */
import {Component, Input} from "@angular/core";

@Component({
  selector: 'tab', 
  styles : [],
  template: `
<div *ngIf="isActive"  class="tab-pane active">
  <ng-content></ng-content>
</div>
`})
export class TabComponent {
    @Input() title:string;
    isActive:boolean = false;
}