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
        this.checked = new Set();
        this.loadRules();
    }
    Object.defineProperty(MailRulesComponent.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: true,
        configurable: true
    });
    MailRulesComponent.prototype.onCheckAll = function () {
        if (this.isAllChecked()) {
            this.checked = new Set();
        }
        else {
            this.checked = new Set(this.rules.rules);
        }
    };
    MailRulesComponent.prototype.onCheck = function (rule) {
        if (this.isChecked(rule)) {
            this.checked.delete(rule);
        }
        else {
            this.checked.add(rule);
        }
    };
    MailRulesComponent.prototype.isChecked = function (rule) {
        return this.checked.has(rule);
    };
    MailRulesComponent.prototype.isAllChecked = function () {
        if (!this.rules || !this.checked) {
            return false;
        }
        return this.checked.size === this.rules.rules.length;
    };
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
        template: "\n        <table class=\"table table-condensed table-hover\" style=\"margin-bottom: 0px\">\n            <thead>\n            <tr>\n                <th style=\"width: 60px\">\n                    <input type=\"checkbox\"\n                           [checked]=\"isAllChecked()\"\n                           (click)=\"onCheckAll()\">\n                </th>\n                <th style=\"width: 200px\">Name</th>\n                <th>Description</th>\n            </tr>\n            </thead>\n        </table>\n        <div style=\"height: 97%; overflow-y: auto\">\n            <table class=\"table table-condensed table-hover\">\n                <tbody>\n                <tr *ngFor=\"let rule of rules?.rules\" (click)=\"onClick(rule)\">\n                    <td style=\"width: 60px\">\n                        <input type=\"checkbox\" [checked]=\"isChecked(rule)\"\n                               (click)=\"onCheck(rule)\">\n                    </td>\n                    <td style=\"width: 200px\">{{rule.name}}</td>\n                    <td>{{rule.description}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [rules_service_1.RulesService])
], MailRulesComponent);
exports.MailRulesComponent = MailRulesComponent;
//# sourceMappingURL=rules.component.js.map