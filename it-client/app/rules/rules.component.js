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
    MailRulesComponent.prototype.onClick = function (rule) {
        this.service.previewItem = rule;
    };
    return MailRulesComponent;
}());
MailRulesComponent = __decorate([
    core_1.Component({
        selector: 'mail-rules',
        styles: [],
        template: "\n        <table class=\"table table-condensed table-hover\" style=\"margin-bottom: 0px\">\n            <thead>\n            <tr>\n                <th class=\"span1\"><input type=\"checkbox\"></th>\n                <th class=\"span2\">Name</th>\n                <th class=\"span9\">Description</th>\n            </tr>\n            </thead>\n        </table>\n        <div style=\"height: 94%; overflow-y: auto\">\n            <table class=\"table table-condensed table-hover\">\n                <tbody>\n                <tr *ngFor=\"let rule of rules?.rules\" (click)=\"onClick(rule)\">\n                    <td><input type=\"checkbox\"> <a href=\"#\"><i class=\"icon-star-empty\"></i></a></td>\n                    <td><strong>{{rule.name}}</strong></td>\n                    <td><strong>{{rule.description}}</strong></td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [rules_service_1.RulesService])
], MailRulesComponent);
exports.MailRulesComponent = MailRulesComponent;
//# sourceMappingURL=rules.component.js.map