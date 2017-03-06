"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by druker on 3/2/2017.
 */
var core_1 = require("@angular/core");
var rules_component_1 = require("./rules.component");
var rules_service_1 = require("./rules.service");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var ruleDetails_module_1 = require("./ruleDetails.module");
var MailRulesModule = (function () {
    function MailRulesModule() {
    }
    return MailRulesModule;
}());
MailRulesModule = __decorate([
    core_1.NgModule({
        declarations: [
            rules_component_1.MailRulesComponent
        ],
        providers: [rules_service_1.RulesService],
        imports: [http_1.HttpModule,
            platform_browser_1.BrowserModule,
            // my modules
            ruleDetails_module_1.RuleDetailsModule
        ],
        exports: [rules_component_1.MailRulesComponent]
    })
], MailRulesModule);
exports.MailRulesModule = MailRulesModule;
//# sourceMappingURL=rules.module.js.map