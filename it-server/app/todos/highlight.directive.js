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
var $ = require('jquery');
var HighlightDirective = (function () {
    function HighlightDirective(elm, renderer, vcr) {
        this.elm = elm;
        this.renderer = renderer;
        this.vcr = vcr;
        renderer.setElementStyle(elm.nativeElement, 'border', '2px solid red');
        $(elm.nativeElement).addClass('blabla');
    }
    Object.defineProperty(HighlightDirective.prototype, "bg", {
        get: function () {
            return this._bg;
        },
        enumerable: true,
        configurable: true
    });
    HighlightDirective.prototype.onMouseEnter = function () {
        this._bg = this.color.bg || 'yellow';
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this._bg = null;
    };
    __decorate([
        core_1.Input('highlight'), 
        __metadata('design:type', Object)
    ], HighlightDirective.prototype, "color", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HighlightDirective.prototype, "elad", void 0);
    __decorate([
        core_1.HostBinding('style.backgroundColor'), 
        __metadata('design:type', Object)
    ], HighlightDirective.prototype, "bg", null);
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HighlightDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = __decorate([
        core_1.Directive({
            selector: '[highlight]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _b) || Object, (typeof (_c = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _c) || Object])
    ], HighlightDirective);
    return HighlightDirective;
    var _a, _b, _c;
}());
exports.HighlightDirective = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map