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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var RulesComponent = (function () {
    function RulesComponent(http) {
        this.http = http;
        this.value = 0;
        this.on10 = new core_1.EventEmitter();
        this.http.get('localhost:3000/rules');
    }
    Object.defineProperty(RulesComponent.prototype, "border", {
        get: function () {
            return this.value / 10 + "px solid red";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulesComponent.prototype, "init", {
        set: function (val) {
            this.value = val.val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RulesComponent.prototype, "step", {
        get: function () {
            return this._step;
        },
        set: function (value) {
            this._step = value;
        },
        enumerable: true,
        configurable: true
    });
    RulesComponent.prototype.up = function () {
        if (this.value > this.max) {
            return;
        }
        this.value += this.step;
        if (this.value > 110) {
            this.on10.emit(this.value);
        }
    };
    RulesComponent.prototype.down = function () {
        this.value--;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RulesComponent.prototype, "max", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
    ], RulesComponent.prototype, "on10", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], RulesComponent.prototype, "todos", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], RulesComponent.prototype, "init", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], RulesComponent.prototype, "step", null);
    RulesComponent = __decorate([
        core_1.Component({
            selector: 'rules',
            styles: ["\n        .test{\n            background-color: yellow;\n        }\n    "],
            template: "\n<div class=\"aa\" [class.test]=\"value % 2 === 0\">\n    <button (click)=\"down()\">Down</button>\n    <span [style.border]=\"border\">{{value}}</span>\n    <span *ngIf=\"value >= max\">Cannot exceed max value</span>\n    <button (click)=\"up()\">Up</button>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _b) || Object])
    ], RulesComponent);
    return RulesComponent;
    var _a, _b;
}());
exports.RulesComponent = RulesComponent;
//# sourceMappingURL=counter.component.js.map