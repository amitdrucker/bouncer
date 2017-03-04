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
 * Created by druker on 3/2/2017.
 */
var core_1 = require("@angular/core");
var rules_service_1 = require("./rules.service");
var rules_class_1 = require("./rules.class");
var MailRulesComponent = (function () {
    function MailRulesComponent(service) {
        this.service = service;
        this.loadRules();
    }
    Object.defineProperty(MailRulesComponent.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: true,
        configurable: true
    });
    MailRulesComponent.prototype.loadRules = function () {
        var _this = this;
        this.service.loadRules().subscribe(function (rules) {
            _this._rules = rules;
        }, function (error) {
            console.log(error);
            _this._rules = new rules_class_1.Rules();
        }, function () {
            console.log('done');
        });
    };
    return MailRulesComponent;
}());
MailRulesComponent = __decorate([
    core_1.Component({
        selector: 'mail-rules',
        styles: [],
        template: "\n<div class=\"container\" style=\"height: 100%\">\n\t<div class=\"row\" style=\"height: 100%\">\n           <div class=\"esconde\" id=\"opdRetro\" style=\"height: 70%; overflow-y: scroll\">\n             <table class=\"table table-striped table-hover \">\n            <thead>\n                <tr class=\"bg-primary\">\n                    <th></th>\n                    <th>Rule</th>\n                    <th>Description</th>\n                    <th>Details</th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"rules\">\n\n                <tr *ngFor=\"let rule of rules.rules\">\n                <td><input type=\"checkbox\"/>\n                    <!--ng-model=\"string\"-->\n                    <!--[name=\"string\"]-->\n                    <!--[ng-true-value=\"expression\"]-->\n                    <!--[ng-false-value=\"expression\"]-->\n                    <!--[ng-change=\"string\"]>-->\n                </td>\n                    <td>{{rule.name}}</td>\n                    <td>{{rule.description}}</td>\n                    <td><a href=\"#\">click to view...</a></td> \n\n                </tr>\n</tbody>\n</table>\n</div>\n</div>\n    </div>\n"
    }),
    __metadata("design:paramtypes", [rules_service_1.RulesService])
], MailRulesComponent);
exports.MailRulesComponent = MailRulesComponent;
//# sourceMappingURL=rules.component.js.map