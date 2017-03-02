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
var MailRulesComponent = (function () {
    function MailRulesComponent(service) {
        this.service = service;
        console.log("a");
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
        this.service.loadRules().subscribe(function (rules) { return _this._rules = rules; }, function (error) { return _this._rules = error; }, function () { return console.log('done'); });
    };
    return MailRulesComponent;
}());
MailRulesComponent = __decorate([
    core_1.Component({
        selector: 'mail-rules',
        styles: [],
        template: "\n<div>\n  {{rules}}\n  hello2\n</div>\n"
    }),
    __metadata("design:paramtypes", [rules_service_1.RulesService])
], MailRulesComponent);
exports.MailRulesComponent = MailRulesComponent;
//# sourceMappingURL=rules.component.js.map