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
var task_class_1 = require('./task.class');
var TodoService = (function () {
    function TodoService() {
        this.tasks = [];
    }
    TodoService.prototype.add = function (desc) {
        desc = desc || this.tempDesc || '';
        var task = new task_class_1.Task(desc);
        this.tasks.push(task);
    };
    TodoService.prototype.remove = function (task) {
        var index = this.tasks.findIndex(function (x) { return x.id === task.id; });
        this.tasks.splice(index, 1);
    };
    Object.defineProperty(TodoService.prototype, "totalIsDone", {
        get: function () {
            return this.tasks
                .filter(function (x) { return x.isDone; })
                .length;
        },
        enumerable: true,
        configurable: true
    });
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map