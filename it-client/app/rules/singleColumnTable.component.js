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
 * Created by druker on 3/6/17.
 */
var core_1 = require("@angular/core");
var SingleColumnTableComponent = (function () {
    function SingleColumnTableComponent() {
    }
    Object.defineProperty(SingleColumnTableComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
        },
        enumerable: true,
        configurable: true
    });
    SingleColumnTableComponent.prototype.addItem = function () {
        this._items.add(this.value);
        delete this.value;
    };
    SingleColumnTableComponent.prototype.clear = function () {
        delete this.value;
    };
    SingleColumnTableComponent.prototype.removeItem = function (item) {
        this._items.delete(item);
    };
    return SingleColumnTableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SingleColumnTableComponent.prototype, "tooltip", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Set),
    __metadata("design:paramtypes", [Set])
], SingleColumnTableComponent.prototype, "items", null);
SingleColumnTableComponent = __decorate([
    core_1.Component({
        selector: 'single-column-table',
        styles: [],
        template: "\n        <input type=\"text\" [(ngModel)]=\"value\" placeholder=\"Add Item...\"/>\n        <button type=\"button\" id=\"add\" (click)=\"addItem()\" [disabled]=\"!value\"\n                title=\"{{tooltip}}\">Add\n        </button>\n        <button type=\"button\" id=\"clear\" (click)=\"clear()\"\n                [disabled]=\"!value\">clear\n        </button>\n        <div *ngFor=\"let item of items\">\n            <span class=\"glyphicon glyphicon-remove\" (click)=\"removeItem(item)\"></span>\n            {{item}}\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], SingleColumnTableComponent);
exports.SingleColumnTableComponent = SingleColumnTableComponent;
//# sourceMappingURL=singleColumnTable.component.js.map