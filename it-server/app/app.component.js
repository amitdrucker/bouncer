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
/**
 * Created by Eyal on 23/01/2017.
 */
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.items = [1, 2, 3, 4];
        this.name = 'eyal';
        this.val = 100;
        /*setInterval(()=>{
            this.name += '!';
        },1000);*/
    }
    Object.defineProperty(AppComponent.prototype, "isAAA", {
        get: function () {
            return this.items.length > 5;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onClick = function (event) {
        console.log("on click: " + JSON.stringify(event));
        //event.stopPropagation();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div>\n        <h1>Outlook Bouncer</h1>\n        <tabs>\n            <tab title=\"Manage Rules\">\n                <rules #c\n                    (on10)=\"name = $event\"\n                    [todos]=\"isAAA\" \n                    [step]=\"3\"\n                    [max]=\"120\"\n                    [init]=\"{id:123,val:val}\"></rules>\n                </tab>\n            <tab title=\"Logs\">\n                <todo-list ></todo-list>\n            </tab>\n        </tabs>\n        \n        \n        \n        \n      <!--  <todo-list></todo-list>-->\n        \n        <!--<div (click)=\"c.up()\">Click me !!!{{c.value}}</div>\n        <div [innerHtml]=\"'<h1>+++++++</h1>'\"></div>\n        \n        <input type=\"text\" \n            [value]=\"name\" \n            (input)=\"name = $event.target.value\">\n            \n        <input type=\"text\" \n            [(ngModel)]=\"name\">\n        \n        {{user?.id}}\n        {{user?.name}}\n        <ngCounter #c\n            (on10)=\"name = $event\"\n            [todos]=\"isAAA\" \n            [step]=\"3\"\n            [init]=\"{id:123,val:val}\"></ngCounter>-->\n    </div>\n" }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*

Log(true)(
    Component({})(
        AppComponent
    )
);

function Log(isDebug:boolean){
    return (target)=>{
        target.prototype.log = function () {

        };
        return target;
    }
}*/
/*
var seI = setInterval;
window.setInterval = function (fn,ms) {
  seI(()=>{
      fn();
      tick();
  },ms)
};*/
//# sourceMappingURL=app.component.js.map