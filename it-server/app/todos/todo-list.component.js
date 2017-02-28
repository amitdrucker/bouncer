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
var styles_1 = require("./styles");
console.log("module.id:" + module.id);
var TodoListComponent = (function () {
    function TodoListComponent(todoBl) {
        this.todoBl = todoBl;
    }
    Object.defineProperty(TodoListComponent.prototype, "tasks", {
        /*set tempDesc(value){ this.todoBl.tempDesc = value; }
        get tempDesc(){return this.todoBl.tempDesc;}*/
        get: function () {
            return this.todoBl.tasks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoListComponent.prototype, "totalIsDone", {
        get: function () {
            return this.todoBl.totalIsDone;
        },
        enumerable: true,
        configurable: true
    });
    TodoListComponent.prototype.add = function (desc) {
        this.todoBl.add(desc);
    };
    TodoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-list',
            encapsulation: core_1.ViewEncapsulation.Native,
            styles: [styles_1.commonStyles],
            styleUrls: ['aaaa.css'],
            providers: [
                todo_service_1.TodoService
            ],
            template: "\n<div class=\"box\">\n  <h1>Todo List Demo</h1>\n  <input type=\"text\" #i />\n    <button (click)=\"add(i.value)\">Add task</button>\n    <hr>\n    <taskUI \n        [source]=\"task\"\n        *ngFor=\"let task of tasks\">\n        {{task.description}}\n    </taskUI>\n    <hr>\n    <total></total>\n</div>\n" }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map