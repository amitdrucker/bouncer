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
    }
    Object.defineProperty(RuleDetailsComponent.prototype, "rule", {
        get: function () {
            return this._rule;
        },
        set: function (rule) {
            this._rule = rule;
            this.emails = !this._rule.emails ? new Set() : new Set(this._rule.emails);
            this.allowedEmails = !this._rule.allowedEmails ? new Set() : new Set(this._rule.allowedEmails);
            this.disallowedEmails = !this._rule.disallowedEmails ? new Set() : new Set(this._rule.disallowedEmails);
        },
        enumerable: true,
        configurable: true
    });
    return RuleDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", rule_class_1.Rule),
    __metadata("design:paramtypes", [rule_class_1.Rule])
], RuleDetailsComponent.prototype, "rule", null);
RuleDetailsComponent = __decorate([
    core_1.Component({
        selector: 'rule-details',
        styles: ["\n        .detailsRow {\n            padding-top: 15px;\n            overflow: hidden;\n            border-bottom: 1px solid #eee;\n        }\n\n        .unscrollable {\n            padding-top: 15px;\n            overflow-y: hidden;\n            border-bottom: 1px solid #eee;\n            height: 165px;\n        }\n\n        .buttons {\n            position: absolute;\n            bottom: 5px;\n        }\n    "],
        template: "\n        <span *ngIf=\"rule\">\n            <div class=\"detailsRow\">\n                <label>Name: </label> {{rule.name}}\n                <br>\n                <label>Description: </label> {{rule.description}}\n            </div>\n            <div class=\"unscrollable\">\n                <label>Emails</label>\n                <br>\n                <single-column-table\n                        [items]=\"emails\"\n                        tooltip=\"enter an email address or just a suffix e.g. '@gmail.com'\"\n                ></single-column-table>\n            </div>\n            <div class=\"unscrollable\">\n                <label>Allowed Emails</label>\n                <br>\n                <single-column-table\n                        [items]=\"allowedEmails\"\n                        tooltip=\"enter an email address or just a suffix e.g. '@gmail.com'\"\n                ></single-column-table>\n            </div>\n            <div class=\"unscrollable\">\n                <label>Disallowed Emails</label>\n                <br>\n                <single-column-table\n                        [items]=\"disallowedEmails\"\n                        tooltip=\"enter an email address or just a suffix e.g. '@gmail.com'\"\n                ></single-column-table>\n            </div>\n            <div class=\"buttons\">\n                <button>Save</button>\n                <button>Discard</button>\n            </div>\n                </span>\n    "
    }),
    __metadata("design:paramtypes", [rules_service_1.RulesService])
], RuleDetailsComponent);
exports.RuleDetailsComponent = RuleDetailsComponent;
//# sourceMappingURL=ruleDetails.component.js.map