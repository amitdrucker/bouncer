"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by druker on 3/6/17.
 */
var core_1 = require("@angular/core");
var rules_service_1 = require("./rules.service");
var rule_class_1 = require("./rule.class");
var RuleDetailsComponent = (function () {
    function RuleDetailsComponent(service) {
        this.service = service;
        this.rule.partners;
    }
    return RuleDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", rule_class_1.Rule)
], RuleDetailsComponent.prototype, "rule", void 0);
RuleDetailsComponent = __decorate([
    core_1.Component({
        selector: 'rule-details',
        styles: [],
        template: "\n        <table *ngIf=\"item\">\n            <tr>Name: {{rule.name}}</tr>\n            <tr>Description: {{rule.description}}</tr>\n            <tr>\n                <single-column-table\n                        [items]=\"rule.accounts\"\n                        tooltip=\"enter an email address or just a suffix e.g. '@gmail.com'\"\n                ></single-column-table>\n            </tr>\n            <tr tooltip=\"enter wither a full email or just the suffix\">Email Address:\n                <table>\n                    <tr *ngFor=\"let acc of rule.accounts\">\n                        <td>{{acc}}</td>\n                    </tr>\n                </table>\n            </tr>\n            <tr *ngIf=\"rule.partners\">Partners:\n                <table>\n                    <tr *ngFor=\"let partner of rule.partners\">\n                        <td>{{partner}}</td>\n                    </tr>\n                </table>\n            </tr>\n        </table>"
    }),
    __metadata("design:paramtypes", [rules_service_1.RulesService])
], RuleDetailsComponent);
exports.RuleDetailsComponent = RuleDetailsComponent;
//# sourceMappingURL=ruleDetails.component.js.map