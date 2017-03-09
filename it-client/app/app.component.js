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
var core_1 = require("@angular/core");
var rules_service_1 = require("./rules/rules.service");
var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: [],
        providers: [],
        template: "\n        <div style=\"height: 100%;\n            overflow-y: hidden;\">\n            <div style=\"width: 70%; height: 100%; overflow-y: hidden; float: left\">\n                <mail-rules></mail-rules>\n            </div>\n            <div style=\"float:left; width: 30%; \n            margin-top: 30px; border-top: 3px solid lightgray;\n                 padding: 15px;\">\n                <rule-details *ngIf=\"service.previewItem\" [rule]=\"service?.previewItem\">\n                </rule-details>\n            </div>\n        </div>\n\n    "
    }),
    __metadata("design:paramtypes", [rules_service_1.RulesService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map