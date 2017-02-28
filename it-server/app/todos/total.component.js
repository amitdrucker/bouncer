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
 * Created by Eyal on 25/01/2017.
 */
var core_1 = require("@angular/core");
var todo_service_1 = require("./todo.service");
var TotalComponent = (function () {
    function TotalComponent(todoBl) {
        this.todoBl = todoBl;
    }
    Object.defineProperty(TotalComponent.prototype, "total", {
        get: function () {
            return this.todoBl.tasks.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TotalComponent.prototype, "totalIsDone", {
        get: function () {
            return this.todoBl.totalIsDone;
        },
        enumerable: true,
        configurable: true
    });
    TotalComponent = __decorate([
        core_1.Component({
            selector: 'total',
            styles: [],
            template: "\n<div>\n  total {{total}} / {{totalIsDone}}\n</div>\n" }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TotalComponent);
    return TotalComponent;
}());
exports.TotalComponent = TotalComponent;
//# sourceMappingURL=total.component.js.map