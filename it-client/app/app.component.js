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
var num = 1;
var AppComponent = (function () {
    function AppComponent() {
        this.name = "eyal";
        this.pic = 'pic.jpg';
        this.value = 10;
    }
    Object.defineProperty(AppComponent.prototype, "border", {
        get: function () {
            return num + "px solid black";
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.up = function () {
        num++;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: ["\n    .blabla{\n        background-color: yellow;\n    }\n"],
        template: "\n    <div style=\"height: 100%\">\n        <mail-rules></mail-rules>\n        <!--<nav>-->\n            <!--<a routerLink=\"/home\">Home</a> |-->\n            <!--<a routerLink=\"/users\">Users</a> |-->\n            <!--<a routerLink=\"/movies\">movies</a> |-->\n        <!--</nav>-->\n        <!--<div>-->\n            <!--<router-outlet></router-outlet>-->\n        <!--</div>-->\n    </div>\n\n<!--    <div>\n        <h1 highlight=\"red\" #ff>{{total.val}} " + core_1.VERSION.full + " {{name}}</h1>  \n       &lt;!&ndash; <img src=\"{{pic}}\"> \n        <img [src]=\"pic\">&ndash;&gt;\n        \n        <tabs>\n            <tab title=\"users\"><users></users></tab>\n            <tab title=\"mdd\">\n                <mdd></mdd>\n            </tab>\n            <tab title=\"accordion\">\n                <accordion>\n                    <template let-car>\n                        <h3>{{car.name}}</h3>\n                        <div>{{car.desc}}</div>\n                    </template>\n                </accordion>\n            </tab>\n            <tab title=\"dropdownlist\">\n                <dropDownList [source]=\"[{name:'bmv',model:123},{name:'bmw',model:33}]\">\n                    <template let-car=\"item\">\n                        <div> <strong>{{car.name}}</strong> - {{car.model}}</div>\n                    </template>\n                </dropDownList>\n            </tab>\n            <tab title=\"counter\">\n                 <counter\n                        [init]=\"10\"\n                        [step]=\"3\"\n                        [max] =\"17\" \n                        [min] = \"5\"\n                        (onMax)=\"value = $event\"\n                        (onMin)=\"value = $event\"\n                    ></counter>\n            </tab>\n            <tab title=\"todo list\">\n                     <todoList></todoList>\n                    <hr>\n                    <todoList></todoList>\n            </tab>\n            <tab title=\"t1\">\n                <h1>this is tabs</h1>\n                 <tabs>\n                    <tab title=\"t1\">\n                        <h1>this is tabs</h1>\n                        \n                    </tab>\n                    <tab title=\"t\" *ngFor=\"let t of [1,2,3]\">\n                        {{t}}\n                    </tab>\n                </tabs>\n            </tab>\n            <tab title=\"t\" *ngFor=\"let t of [1,2,3]\">\n                {{t}}\n            </tab>\n        </tabs>\n        \n        <button  (click)=\"up()\">click me!!!</button>\n        <br><br><br>\n       \n        {{value}}\n      &lt;!&ndash;  \n        +++++++++++++++++\n        <div *ngIf=\"true\"\n                [class.blabla]=\"true\"\n                [style.border]=\"border\"\n                [attr.bla]=\"123\"\n                [innerHtml]=\"ff.innerHTML\">            \n            </div>\n        +++++++++++++++++\n        <ng-container *ngIf=\"true\">\n            <div \n                [class.blabla]=\"true\"\n                [style.border]=\"border\"\n                [attr.bla]=\"123\"\n                [innerHtml]=\"'<h1>hello !!!!</h1>'\">            \n            </div>\n            <div>dsfdfdf</div>\n        </ng-container>\n        \n        <div *ngFor=\"let i of [1,2,'bla','xxx']; let e=index;let l=last\">\n            {{e}} - i : {{i}}\n            <span *ngIf=\"l\" [ngClass]=\"{a:true,b:false,blabla:true}\">end !!!</span>\n        </div>\n        &ndash;&gt;\n    </div>-->\n"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//Log({})(Component({})(AppComponent));
function Log(arg) {
    return function (target) {
        return target;
    };
}
//# sourceMappingURL=app.component.js.map